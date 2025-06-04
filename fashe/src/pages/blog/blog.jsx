import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import BlogSide from '../home/components/blogside';

const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">

      <div className="md:w-3/4 w-full">
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((e) => (
            <Link
              key={e.name}
              to={`/blogs/${e.name}`}
              className=" text-white p-6 rounded-2xl  ">
              <img
                src={e.image}
                className="  w-full object-cover mb-4"/>
              <h2 className="text-2xl text-gray-800 font-bold mb-2">{e.title}</h2>
              <p className="text-base text-gray-700 mb-6">{e.miniDesc}</p>
              <Link to={`/blogs/${e.name}` } className='text-gray-700'>Continue Reading</Link>
            </Link>
          ))}
        </div>
      </div>


      <div className="md:w-1/4 ">
        <BlogSide />
      </div>
    </div>
  );
};

export default Blog;
