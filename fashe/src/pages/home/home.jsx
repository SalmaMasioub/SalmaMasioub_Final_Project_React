import React from 'react';
import Product from './components/product';
import AnimatedSlide from './components/caroussel';
import Carousel from './components/featuredProducts';

const Home = () => {
    return (
        <div>
        <AnimatedSlide></AnimatedSlide> 
        <Product></Product>
        <Carousel></Carousel>
        </div>
    );
};

export default Home;