import React from 'react';
import Product from './components/product';
import AnimatedSlide from './components/caroussel';

const Home = () => {
    return (
        <div>
        <AnimatedSlide></AnimatedSlide> 
        <Product></Product>
        </div>
    );
};

export default Home;