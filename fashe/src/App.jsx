import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/productsContext'
import Product from './pages/home/components/product';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Details from './layout/details';
import Blogdetails from './layout/blogdetails';

const App = () => {
    return (
        <ProductProvider>
        <div className=' flex'>

            <div className='lg:w-[25vw] h-1/2 bg-amber-400'>
<h1>HELLOOOO</h1>
          </div>
  <div className="w-full lg:w-[75vw] flex justify-start items-center min-h-[100px]">
            <Routes>
              <Route path="/" element={<Home />} />
               <Route path="/product" element={<Shop />} />
                <Route path="/details/:title" element={<Details />} />
<Route  path="/blogs/:name" element={<Blogdetails />} />
            </Routes>
          </div>
        </div>
        
        </ProductProvider>
    );
};

export default App;
