import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { FaUserCircle } from "react-icons/fa";

const BlogDetails = () => {
  const { name} = useParams()

  const blog = blogs.find(b => b.name === name)

 

  return (
 
      
   <div className="w-[75%]">
       <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded mb-6" />
      <h1 className="text-4xl mb-6 font-light text-gray-800">{blog.title}</h1>
      <p className='pb-8 text-gray-600 '>{blog.miniDesc}</p>
      <p className=" text-gray-600 ">{blog.desc}</p>

      <div className="flex gap-2.5 items-center mt-10 mb-10 ">
<p className="">Tags cloud :</p>
<p className="text-gray-700 px-2 py-0.5 border border-gray-700 rounded-4xl">Crafts</p>
<p className="text-gray-700 px-2 py-0.5 border border-gray-700 rounded-4xl">Street Style</p>
      </div>

      <h1 className="font-semibold text-3xl text-gray-800 pb-2">1 comment to show</h1>
      <div className="flex gap-3 mb-9">
        <FaUserCircle className='text-5xl text-gray-400' />
<div>
 <p className="font-light text-gray-700"> <span className="font-semibold text-gray-700">test name</span> / Jan 11, 2018 Reply</p>
<p className="font-light text-gray-700">test message</p>
</div>
      </div>
      <h1 className="font-semibold text-3xl text-gray-800 pb-2">Leave a comment</h1>

 <p className="font-light text-gray-700 mb-11"> Your email address will not be published. Required fields are marked *</p>

<form action="" className='flex flex-col gap-3 items-start mb-20'>

<textarea  placeholder='Message'  className="border border-gray-400 w-full h-35 p-4"></textarea>
<input className="py-3 px-4 border border-gray-400 w-1/4" placeholder='Your Name' />
<input className="py-3 px-4 border border-gray-400 w-1/4" placeholder='Email adress' />

<button type="button" className="mt-4 bg-gray-950 px-7 py-2 rounded-4xl text-white hover:bg-red-700 ">POST COMMENT</button>
 <p className="font-light text-gray-700 mb-11">Please note, comments must be approved before they are published.</p>

</form>

   </div>
   
   

  );
};

export default BlogDetails;
