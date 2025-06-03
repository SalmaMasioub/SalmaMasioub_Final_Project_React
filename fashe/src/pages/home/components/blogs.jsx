import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../../data/blogs';

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
      {blogs.map((e) => (
        <Link to={`/blogs`} key={e.title} className=" overflow-hidden " >
          <div className="relative w-full h-96">
            <img
              src={e.image}
              className="w-full object-cover transition-transform duration-300 "/>
 <p className="font-semibold  text-black">{e.title}</p>
           <p className="font-light text-black/70 ">{e.miniDesc}</p>
           
          </div>
          
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
