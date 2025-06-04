import React from 'react';
import { products } from '../../../data/products';
import { Link } from 'react-router-dom';









const BlogSide = () => {
  return (

    <div className="w-full ">

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Featured Products</h2>
        <div className="flex flex-col gap-4">
          {products.slice(0, 4).map((e) => (
            <div key={e.id}>
              <img src={e.image} alt={e.title} className="w-full h-36 object-contain mb-2" />
              <Link
                to={`/details/${e.title}`}
                className="text-md mb-1 block font-medium text-gray-800 hover:text-red-700">
                {e.title}
              </Link>

              <p className="text-sm text-black">{e.price}</p>
              {e.oldprice && (
                <p className="text-sm line-through text-gray-500">{e.oldprice}</p>
              )}
            </div> ))}

        </div>
        
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tags Cloud</h2>
        <div className="flex flex-wrap gap-2">
          <p className="text-gray-700 px-3 py-1 border border-gray-700 rounded-full text-sm">Crafts</p>
          <p className="text-gray-700 px-3 py-1 border border-gray-700 rounded-full text-sm">Street Style</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSide;
