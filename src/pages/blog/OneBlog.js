import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

let api_url = process.env.REACT_APP_API;

const OneBlog = () => {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = async () => {
    const { data } = await axios.get(`${api_url}blogs/${id}`);
    console.log(data);
    setBlog(data);
  };

  return (
    <div className="p-4 relative">
      <MdOutlineArrowBackIos
        onClick={() => navigate(-1)}
        size={32}
        className="absolute top-2 left-2 cursor-pointer"
      />
      <h1 className="text-3xl text-center py-4">{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
    </div>
  );
};

export default OneBlog;
