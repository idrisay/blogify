import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

let api_url = process.env.REACT_APP_API;
let currentUser = JSON.parse(localStorage.getItem("user"));

const BlogCard = ({ blog, getBlogs }) => {
  const [onMouseBlog, setonMouseBlog] = useState(false);

  const notify = (msg) => toast(msg);

  const handleDeleteBlog = () => {
    fetch(`${api_url}blogs/${blog.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        getBlogs();
        notify("Blog deleted successfully!");
      });
  };

  return (
    <div
      className="border-[1px] border-red-300 p-4 relative rounded-md m-2"
      onMouseOver={() => setonMouseBlog(true)}
      onMouseOut={() => setonMouseBlog(false)}
    >
      <h2 className="text-xl first-letter:text-4xl">{blog.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
      {onMouseBlog && (
        <div>
          <Link
            to={`/blogs/edit/${blog.id}`}
            className="absolute top-1 right-1 cursor-pointer text-green-500"
          >
            <FiEdit size={24} />
          </Link>
          <div
            onClick={handleDeleteBlog}
            className="absolute bottom-1 right-1 cursor-pointer text-red-500"
          >
            <MdOutlineDeleteSweep size={28} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
