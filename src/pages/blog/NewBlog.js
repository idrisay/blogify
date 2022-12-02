import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SunEditor from "suneditor-react";

let currentUser = JSON.parse(localStorage.getItem("user"));

const NewBlog = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();

  const notify = (msg) => toast(msg);

  const handleAddBlog = () => {
    const data = { title: title, body: content, authorId: currentUser.id };
    let cleanText = content.replace(/<\/?[^>]+(>|$)/g, "");

    if (!title) {
      notify("The title cannot be left blank");
    } else if (title.length < 3) {
      notify("Ez an must be 3 characters");
    } else if (!cleanText) {
      notify("The body cannot be left blank");
    } else if (cleanText.length < 4) {
      notify("Ez an must be 4 characters");
    } else {
      fetch("http://localhost:3000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          navigate("/blogs");
          notify("Blog added successfully!");
        } else {
          notify("Something went wrong! Try again.");
        }
      });
    }
  };

  const handleChange = (editorContent) => {
    setContent(editorContent);
  };

  return (
    <div className="m-4">
      <h1 className="text-center text-2xl underline">New Blogs</h1>
      <div className="flex flex-col w-full border-2 my-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="m-2 border-[1px] p-2"
          type="text"
          placeholder="Title"
        />
        {/* <textarea
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="m-2  border-[1px] p-2"
          type="text"
          placeholder="Content"
          autoFocus
        /> */}
        <SunEditor
          onChange={handleChange}
          setOptions={{
            height: 200,
            buttonList: [
              ["formatBlock", "font", "fontSize"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "lineHeight",
                "textStyle",
                "codeView",
                "fontColor",
              ],
              ["align", "list", "italic"],
              ["image"],
            ],
            // plugins: [font] set plugins, all plugins are set by default
            // Other option
          }}
        />
      </div>
      <button
        className="bg-green-200 w-full text-grey-500 p-2 text-xl"
        onClick={handleAddBlog}
      >
        Add
      </button>
    </div>
  );
};

export default NewBlog;
