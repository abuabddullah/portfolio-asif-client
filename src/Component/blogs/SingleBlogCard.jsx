import React from "react";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleBlogCard = ({ blog, index }) => {
    return (
        <div
            className="max-w-sm bg-gray-800 border border-gray-700 rounded overflow-hidden cursor-pointer shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 300}
            data-aos-duration="1000"
        >
            {/* Blog Image */}
            <div className="relative w-full h-48">
                <img
                    src={
                        blog.image ||
                        "https://theworldtravelguy.com/wp-content/uploads/2020/04/DSCF3947_450n.jpg"
                    }
                    alt={blog.title || "Blog Image"}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-4 py-6">
                {/* Writer and Comments */}
                <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span className="mr-2">
                        {blog.writer?.slice(0, 7) || "Anonymous"}
                    </span>
                    <span className="mx-2">|</span>
                    <FaRegComment className="inline-block text-red-500 mr-1" />
                    <span>{blog.comments?.length || 3} Comments</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-2 text-white">{blog.title}</h2>

                {/* Description */}
                <p className="text-gray-300 mb-4">
                    <small>{blog.summary?.slice(0, 100)}...</small>
                </p>

                {/* Read More Button */}
                <div>
                    <Link
                        to={`/blogs/${blog?._id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 text-sm font-medium hover:text-red-400 hover:underline"
                    >
                        Read More →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogCard;
