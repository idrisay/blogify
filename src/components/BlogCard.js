import React from 'react'

const BlogCard = ({blog}) => {
  console.log(blog)
  return (
    <div className='border-[1px] border-red-700 w-full p-4'>
       <h2 className='text-xl first-letter:text-4xl'>{blog.title}</h2>
       <div className='mt-4'>
       <p className='text-sm'>
        {blog.body}
       </p>
       </div>
    </div>
  )
}

export default BlogCard
