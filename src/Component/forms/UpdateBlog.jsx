// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import SunEditor from "suneditor-react";
// import "suneditor/dist/css/suneditor.min.css";
// import { useGetBlogQuery, useUpdateBlogMutation } from "../../../store/api";

// const UpdateBlog = () => {
//   const { id } = useParams();
//   const { data: blog, isLoading: isFetching } = useGetBlogQuery(id);
//   const [updateBlog, { isLoading }] = useUpdateBlogMutation();
//   const [blogData, setBlogData] = useState({
//     title: "",
//     content: "",
//     summary: "",
//     tags: "",
//     published: true,
//   });

//   useEffect(() => {
//     if (blog) {
//         alert("use direct url for using img in your blog or upload less than 30kb img");
//       setBlogData({
//         title: blog.title,
//         content: blog.content,
//         summary: blog.summary,
//         tags: blog?.tags?.join(",") || "",
//         published: blog.published,
//       });
//     }
//   }, [blog]);

//   const handleContentChange = (content) => {
//     setBlogData((prev) => ({
//       ...prev,
//       content,
//     }));
//   };

//   const handleTagsChange = (e) => {
//     setBlogData((prev) => ({
//       ...prev,
//       tags: e.target.value,
//     }));
//   };

//   const handleSubmit = async () => {
//     console.log("🚀 ~ handleSubmit ~ blogData:", blogData.tags);
//     try {
//       const res = await updateBlog({ id, ...blogData }).unwrap();
//       console.log("Blog updated:", res);
//     } catch (error) {
//       console.error("Failed to update blog:", error);
//     }
//   };

//   if (isFetching) return <div>Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       <input
//         type="text"
//         placeholder="Blog Title"
//         className="w-full p-3 border rounded-lg"
//         value={blogData.title}
//         onChange={(e) =>
//           setBlogData((prev) => ({ ...prev, title: e.target.value }))
//         }
//       />

//       <input
//         type="text"
//         placeholder="Summary"
//         className="w-full p-3 border rounded-lg"
//         value={blogData.summary}
//         onChange={(e) =>
//           setBlogData((prev) => ({ ...prev, summary: e.target.value }))
//         }
//       />

//       <SunEditor
//         setContents={blogData.content}
//         onChange={handleContentChange}
//         setOptions={{
//           height: "800px",
//           buttonList: [
//             ["undo", "redo"],
//             ["font", "fontSize", "formatBlock"],
//             ["bold", "underline", "italic", "strike"],
//             ["fontColor", "hiliteColor"],
//             ["removeFormat"],
//             ["outdent", "indent"],
//             ["align", "horizontalRule", "list", "lineHeight"],
//             ["table", "link", "image"],
//             ["fullScreen", "showBlocks", "codeView"],
//           ],
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Tags (comma separated)"
//         className="w-full p-3 border rounded-lg"
//         value={blogData.tags}
//         onChange={handleTagsChange}
//       />

//       <div className="flex items-center gap-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={blogData.published}
//             onChange={(e) =>
//               setBlogData((prev) => ({ ...prev, published: e.target.checked }))
//             }
//           />
//           Publish
//         </label>
//         <button
//           onClick={handleSubmit}
//           disabled={isLoading}
//           className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
//         >
//           {isLoading ? "Updating..." : "Update"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateBlog;

/* new code */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useGetBlogQuery, useUpdateBlogMutation } from "../../../store/api";

const UpdateBlog = () => {
  const { id } = useParams();
  const { data: blog, isLoading: isFetching } = useGetBlogQuery(id);
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    summary: "",
    tags: "",
    image: "",
    published: true,
  });

  useEffect(() => {
    if (blog) {
      alert(
        "use direct url for using img in your blog or upload less than 30kb img"
      );
      setBlogData({
        title: blog.title,
        content: blog.content,
        summary: blog.summary,
        tags: blog?.tags?.join(",") || "",
        image: blog.image,
        published: blog.published,
      });
    }
  }, [blog]);

  const handleContentChange = (content) => {
    setBlogData((prev) => ({
      ...prev,
      content,
    }));
  };

  const handleTagsChange = (e) => {
    setBlogData((prev) => ({
      ...prev,
      tags: e.target.value,
    }));
  };

  const handleImgChange = (e) => {
    setBlogData((prev) => ({
      ...prev,
      image: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await updateBlog({ id, ...blogData }).unwrap();
      console.log("Blog updated:", res);
    } catch (error) {
      console.error("Failed to update blog:", error);
    }
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="font-medium">
          Blog Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter blog title"
          className="w-full p-3 border rounded-lg"
          value={blogData.title}
          onChange={(e) =>
            setBlogData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="font-medium">
          Thumbnail
        </label>
        <input
          id="image"
          type="text"
          placeholder="Thumbmail Imgae"
          className="w-full p-3 border rounded-lg"
          value={blogData.image}
          onChange={handleImgChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="summary" className="font-medium">
          Summary
        </label>
        <input
          id="summary"
          type="text"
          placeholder="Enter blog summary"
          className="w-full p-3 border rounded-lg"
          value={blogData.summary}
          onChange={(e) =>
            setBlogData((prev) => ({ ...prev, summary: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Content</label>
        <SunEditor
          setContents={blogData.content}
          onChange={handleContentChange}
          setOptions={{
            height: "800px",
            buttonList: [
              ["undo", "redo"],
              ["font", "fontSize", "formatBlock"],
              ["bold", "underline", "italic", "strike"],
              ["fontColor", "hiliteColor"],
              ["removeFormat"],
              ["outdent", "indent"],
              ["align", "horizontalRule", "list", "lineHeight"],
              ["table", "link", "image"],
              ["fullScreen", "showBlocks", "codeView"],
            ],
          }}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="tags" className="font-medium">
          Tags
        </label>
        <input
          id="tags"
          type="text"
          placeholder="Enter tags (comma separated)"
          className="w-full p-3 border rounded-lg"
          value={blogData.tags}
          onChange={handleTagsChange}
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={blogData.published}
            onChange={(e) =>
              setBlogData((prev) => ({ ...prev, published: e.target.checked }))
            }
          />
          Publish
        </label>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300"
        >
          {isLoading ? "Updating..." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default UpdateBlog;
