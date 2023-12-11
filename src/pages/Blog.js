import React, { useState } from 'react';
import { blogs } from '../api/Api';
import { blogBg } from '../assets/index';

const Blog = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const handleReadMoreClick = (blogId) => {
    // Toggle expanded state for the clicked blog post
    // User click on event, it will check the conditon: expandedBlogId(null) != blogId (1)
    // Set the expandedBlogId state to 1
    setExpandedBlogId(expandedBlogId === blogId ? null : blogId);
  };
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
      <img src={blogBg} alt='background' className='py-8 w-full mx-auto'/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.excerpt}</p>
            {/* if the expandedBlogId is set to blog.id (meaning it is clicked), show content, else, null*/}
            <p className="text-gray-600">{expandedBlogId === blog.id? blog.content: null}</p>
            <button className="text-blue-500 hover:underline mt-2" 
            onClick={() => handleReadMoreClick(blog.id)}>
              {expandedBlogId === blog.id ? <p>Read Less</p> : <p>Read More</p>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
