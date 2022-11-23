import {useState, useEffect} from 'react'
import BlogCard from '../../components/BlogCard';

let api_url = process.env.REACT_APP_API;

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    getBlogs()
  }, [])
  
  const getBlogs = () => {
    fetch(`${api_url}blogs`).then((response) => response.json()).then((res) => {
      setBlogs(res)
    })
  }

  return (
    <div>
      <div className='text-center text-xl'>
        <h1>Blog</h1>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-col-1 gap-2 p-2'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}

export default Blog