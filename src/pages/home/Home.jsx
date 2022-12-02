import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let api_url = process.env.REACT_APP_API;

const Home = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const { data } = await axios.get(`${api_url}blogs`);
    setInfo(data);
  };

  return (
    <div className=" p-4 relative rounded-md m-2">
      {info.map((item) => (
        <Link to={`/blog/${item.id}`} key={item.id} className="block border-[1px] border-red-300 m-3 p-4 h-40 overflow-y-hidden hover:bg-red-50">
          <h2 className="text-xl first-letter:text-4xl mb-2 ">{item.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.body }} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
