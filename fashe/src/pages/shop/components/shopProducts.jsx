import React from 'react';
import { products } from '../../../data/products';
import { Link } from 'react-router-dom';

const shopProducts = () => {
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 w-[75%]">
      
      {products.map((e) => (
         <Link to={`/product`} key={e.button} className="overflow-hidden">
                <div className="w-full h-96 relative group overflow-hidden">
          <img src={e.image} className="w-full h-full object-cover"/>
        
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          </div>
        
          <button className=" absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white hover:bg-red-700
           hover:text-white  text-sm rounded px-3 py-3 opacity-0 translate-y-4 group-hover:opacity-100
            group-hover:translate-y-0 transition-all duration-250 z-10 ">
          ADD TO CART
        </button>
        
        </div>
        
        
                    <h3 className="mt-2 font-light text-lg">{e.title}</h3>
                    <div className="flex gap-2 items-center">
                      <h3 className="text-black font-light">{e.price}</h3>
                      {e.oldprice && (
                        <h3 className="line-through font-light">{e.oldprice}</h3>
                      )}
                    </div>
                  </Link>
      ))}
    </div>
    );
};

export default shopProducts;