import { useEffect, useState } from "react";
import { FaPencil, FaPlus } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteBlogMutation, useGetAllBlogsQuery } from "../../../store/api";

const DashBlog = () => {
  const navigate = useNavigate();
  const { data: blogs, isLoading } = useGetAllBlogsQuery();
  console.log("🚀 ~ DashBlog ~ blogs:", blogs)
  const [deleteBlog] = useDeleteBlogMutation();
  const [localBlogs, setLocalBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      setLocalBlogs(blogs);
    }
  }, [blogs]);

  const handleDelete = async (id) => {
    try {
      // Remove from UI first (Optimistic UI)
      setLocalBlogs((prev) => prev.filter((blog) => blog._id !== id));

      // Send request to backend
      await deleteBlog(id).unwrap();
    } catch (error) {
      console.error("Delete failed, restoring UI:", error);
      // Restore UI if the request fails
      setLocalBlogs(blogs);
    }
  };

  if (isLoading) {
    return <div>Loading . . .</div>;
  }

  return (
    <div className="space-y-6">
      <d className="flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Blogs</h1>
        <button className="bg-green-400 px-2 py-2 text-sm font-medium rounded-md text-white flex justify-between items-center gap-2"><FaPlus/><Link to="/dashboard/blog-editor">Add New Blog</Link></button>
      </d>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {localBlogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {blog.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {blog.summary}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/blogs-update/${blog?._id}`)
                        }
                        className="text-green-600 hover:text-green-900  mx-2"
                      >
                        <FaPencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-900 mx-2"
                      >
                        <FiTrash className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBlog;
