import React from 'react';
import Product from './components/product';
import AnimatedSlide from './components/caroussel';
import Carousel from './components/featuredProducts';
import Blogs from './components/blogs';
import Our from './components/ourProducts';

const Home = () => {
    return (
        <div>
        <AnimatedSlide></AnimatedSlide> 
        <Product></Product>
        <Carousel></Carousel>
        <Our></Our>
        <Blogs></Blogs>
        </div>
    );
};

export default Home;