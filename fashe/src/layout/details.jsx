import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import Carousel from '../pages/home/components/featuredProducts';





const ExpandableSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b p-4">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full font-semibold">
        {title}
        <span className={`text-xl font-bold transform transition ${isOpen ? "rotate 45" : ''}`}>+</span>
      </button>




      {isOpen && (
        <div className="mt-2 text-gray-700">
          {children}
        </div>
      )}
    </div>
  )
}



const Details = () => {
  const { title } = useParams();
  const product = products.find((p) => p.title === title)

  const [mainImage, setMainImage] = useState(product?.image)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('S')



  const increment = () => setQuantity(prev => prev + 1)
  const decrement = () => {
    
    if (quantity > 1) setQuantity(prev => prev - 1)
  }

 

  return (
   <div>


 <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      <div className="flex">


       
        <img

          src={product.image}
          className="w-full h-[500px] object-cover"/>

        
      </div>


      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-light">{product.title}</h1>

        <div className="flex items-center gap-4">
          <span className="text-4xl font-light text-black">{product.price}</span>
          {product.oldprice && (
            <span className="line-through text-gray-500">{product.oldprice}</span>
          )}
        </div>

        <p className="text-gray-700 font-light pb-9">{product.miniDesc}</p>

        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button 
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-1 border rounded ${selectedSize === size 
                ? "bg-red-600 text-white border-red-600": "text-red-600 border-red-600"}`}>
              {size}
            </button>
          ))}
        </div>



        <div className="flex items-center gap-4 pt-6 pb-15">
          <div className="flex items-center border-2 border-gray-100 rounded overflow-hidden">
            <button
              onClick={decrement}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 font-bold text-xl">-</button>
            <input
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-12 text-center outline-none" min="1"/>

            <button
              onClick={increment}
              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 font-bold text-xl">+</button>
          </div>



          <button className="px-9 py-2 bg-black text-white  hover:bg-red-700 transition rounded-4xl">
            ADD TO CART
          </button>
        </div>

        <div className="text-sm text-gray-700 flex gap-5">
          <p>Brand: <strong>MyVendor</strong></p>
          <p>

            Categories:
            <a href="/collections/all/boxy" className=" ml-1">boxy</a>,
            <a href="/collections/all/Shirts" className=" ml-1">Shirts</a>,
            <a href="/collections/all/sleeveless" className=" ml-1">sleeveless</a>
          </p>
        </div>



        <ExpandableSection title="Description">
          <p>{product.description}</p>
        </ExpandableSection>

        <ExpandableSection title="Additional Information">
          <p>We accept returns within 30 days. Lorem ipsum dolor sit amet...</p>
        </ExpandableSection>

        <ExpandableSection title="Reviews">
          <p className='text-start text-3xl font-light text-black'>Customer Reviews</p>
          <p className='text-start text-black'>Based on 3 reviews Write a review!</p>
        </ExpandableSection>
      </div>

      
    </div>

<Carousel></Carousel>
   </div>
  );
};

export default Details;
