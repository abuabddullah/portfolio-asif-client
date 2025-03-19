import React from "react";
import { useGetAllBlogsQuery } from "../../store/api";
import SingleBlogCard from "./blogs/SingleBlogCard";

const Blogs = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery();

  return (
    <div className="p-10" id="blogs">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
          My Blogs
        </h1>
        <div className="mb-10">
          <span className="inline-block w-40 h-1 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-400"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-400"></span>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog,index) => (
          <SingleBlogCard index={index} blog={blog} key={blog?._id}/>
        ))}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center text-white">Loading blogs...</div>
      )}
    </div>
  );
};

export default Blogs;
