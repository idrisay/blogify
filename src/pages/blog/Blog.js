import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import { BsJournalPlus } from "react-icons/bs";
import notFoundBlog from '../../assets/notfoundblog.png'

let api_url = process.env.REACT_APP_API;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = () => {
    fetch(`${api_url}blogs`)
      .then((response) => response.json())
      .then((res) => {
        setBlogs(res);
      });
  };

  return (
    <div>
      <div className="text-center text-xl">
        <div className="flex justify-between p-4">
          <h1 className="text-4xl">Blogs</h1>
          <Link to="/blogs/new-blog" className="flex items-center border-[1px] p-2 rounded-sm border-red-100 hover:bg-red-100">
            New Blog
            <BsJournalPlus className="m-2" />
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-col-1 gap-2 p-2">
        {blogs.length == 0 ? 
        <div className="w-[100vw]" style={{}}>
          <img className="mx-auto w-[25%] flex" src={notFoundBlog} alt="" />
        </div>
        :
        blogs.map((item) => (
          <BlogCard getBlogs={getBlogs} key={item.id} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
