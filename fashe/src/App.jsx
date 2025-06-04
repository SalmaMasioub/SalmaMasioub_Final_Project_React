import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/productsContext';
import Product from './pages/home/components/product';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Details from './layout/details';
import Blogdetails from './layout/blogdetails';
import Footer from './layout/footer';
import Navbar from './layout/navbar';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';

const App = () => {
  return (
    <ProductProvider>
      <div className='flex'>
        <div className='lg:w-[25vw] h-1/2 bg-amber-400'>
          <Navbar></Navbar>
        </div>

        <div className="w-full lg:w-[75vw] flex flex-col justify-start items-center min-h-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Shop />} />
             <Route path="/blog" element={<Blog />} />

            <Route path="/details/:title" element={<Details />} />
            <Route path="/blogs/:name" element={<Blogdetails />} />

          </Routes>

          <Footer />
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
