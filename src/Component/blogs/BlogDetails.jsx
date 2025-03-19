import React from "react";
import { FaRegClock, FaRegUser, FaTags } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetBlogQuery } from "../../../store/api";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading } = useGetBlogQuery(id);

    if (isLoading) return <div className="text-gray-200">Loading...</div>;

    return (
        <div className="max-w-screen-xl mx-auto bg-gray-900">
            {/* Banner Image */}
            {blog?.image && (
                <div className="w-full h-[400px] relative">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <div className="py-12 px-4">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 text-gray-100">{blog?.title}</h1>
                    <div className="flex items-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <FaRegUser className="text-primary" />
                            <span>Admin</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegClock className="text-primary" />
                            <span>{new Date(blog?.publishedAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
                    <div className="space-y-6">
                        {/* Content */}
                        <div className="prose max-w-none prose-invert">
                            <div
                                dangerouslySetInnerHTML={{ __html: blog?.content }}
                                className="text-gray-300 leading-relaxed"
                            />
                        </div>

                        {/* Tags */}
                        {blog?.tags?.length > 0 && (
                            <div className="flex items-center gap-3 pt-6 border-t border-gray-700">
                                <FaTags className="text-primary" />
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300 hover:bg-primary hover:text-white transition"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Summary Card */}
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3 text-gray-100">Summary</h3>
                            <p className="text-gray-300">{blog?.summary}</p>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3 text-gray-100">Blog Info</h3>
                            <div className="space-y-2 text-sm text-gray-300">
                                <p>
                                    Published: {new Date(blog?.publishedAt).toLocaleDateString()}
                                </p>
                                <p>
                                    Last Updated: {new Date(blog?.updatedAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
