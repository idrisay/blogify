import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleAddBlog = () => {
    const data = { title: title, body: content, userId: 1 };
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        navigate("/blogs");
      }
    });
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
        <textarea
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          className="m-2  border-[1px] p-2"
          type="text"
          placeholder="Content"
          autoFocus
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
