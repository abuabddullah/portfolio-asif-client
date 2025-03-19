
// import { useState } from 'react';
// import SunEditor from 'suneditor-react';
// import 'suneditor/dist/css/suneditor.min.css';


// const BlogEditor = () => {
//   const [blogData, setBlogData] = useState({
//     title: '',
//     content: '',
//     summary: '',
//     tags: [],
//     published: false
//   });

//   const handleContentChange = (content) => {
//     setBlogData(prev => ({
//       ...prev,
//       content
//     }));
//   };

//   const handleTagsChange = (e) => {
//     const tags = e.target.value.split(',').map(tag => tag.trim());
//     setBlogData(prev => ({
//       ...prev,
//       tags
//     }));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       <input
//         type="text"
//         placeholder="Blog Title"
//         className="w-full p-3 border rounded-lg"
//         value={blogData.title}
//         onChange={(e) => setBlogData(prev => ({ ...prev, title: e.target.value }))}
//       />

//       <input
//         type="text"
//         placeholder="Summary"
//         className="w-full p-3 border rounded-lg"
//         value={blogData.summary}
//         onChange={(e) => setBlogData(prev => ({ ...prev, summary: e.target.value }))}
//       />

//       <SunEditor
//         setContents={blogData.content}
//         onChange={handleContentChange}
//         setOptions={{
//           height: '400px',
//           buttonList: [
//             ['undo', 'redo'],
//             ['font', 'fontSize', 'formatBlock'],
//             ['bold', 'underline', 'italic', 'strike'],
//             ['fontColor', 'hiliteColor'],
//             ['removeFormat'],
//             ['outdent', 'indent'],
//             ['align', 'horizontalRule', 'list', 'lineHeight'],
//             ['table', 'link', 'image'],
//             ['fullScreen', 'showBlocks', 'codeView'],
//           ]
//         }}
//       />

//       <input
//         type="text"
//         placeholder="Tags (comma separated)"
//         className="w-full p-3 border rounded-lg"
//         value={blogData.tags.join(', ')}
//         onChange={handleTagsChange}
//       />

//       <div className="flex items-center gap-3">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={blogData.published}
//             onChange={(e) => setBlogData(prev => ({ ...prev, published: e.target.checked }))}
//           />
//           Publish
//         </label>
//         <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogEditor;



/* new code 1 */

import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useAddBlogMutation } from "../../../store/api";

const BlogEditor = () => {
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    summary: "",
    tags: "",
    published: true,
  });

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

  const handleSubmit = async () => {
    console.log("🚀 ~ handleSubmit ~ blogData:", blogData)
    try {
      const res = await addBlog(blogData).unwrap();
      console.log("🚀 ~ handleSubmit ~ res:", res)
      // Reset form or show success message
      setBlogData({
        title: "",
        content: "",
        summary: "",
        tags: "",
        published: true,
      });
    } catch (error) {
      console.error('Failed to add blog:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <input
        type="text"
        placeholder="Blog Title"
        className="w-full p-3 border rounded-lg"
        value={blogData.title}
        onChange={(e) =>
          setBlogData((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <input
        type="text"
        placeholder="Summary"
        className="w-full p-3 border rounded-lg"
        value={blogData.summary}
        onChange={(e) =>
          setBlogData((prev) => ({ ...prev, summary: e.target.value }))
        }
      />

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

      <input
        type="text"
        placeholder="Tags (comma separated)"
        className="w-full p-3 border rounded-lg"
        value={blogData.tags}
        onChange={handleTagsChange}
      />

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
          {isLoading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default BlogEditor;
