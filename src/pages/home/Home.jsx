import {useState, useEffect} from 'react'
import axios from "axios";
let api_url = process.env.REACT_APP_API;

const Home = () => {
  const [info, setInfo] = useState([]);

    useEffect(() => {
      getBlogs();
    }, []);

    const getBlogs = async () => {
      const {data} = await axios.get(`${api_url}blogs`);
      setInfo(data);
    }
    

  return (
    <div className='p-4 relative rounded-md m-2'>
      {info.map((item) => (
        <div key={item.id} className='border-[1px] border-red-300 m-3 p-4'> 
          <h2 className='text-xl first-letter:text-4xl mb-2' >{item.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: item.body }} />
        </div>
      ))}
    </div>
  )
}

export default Home