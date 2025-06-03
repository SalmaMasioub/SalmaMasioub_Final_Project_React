import React from 'react';
import Product from './components/product';
import AnimatedSlide from './components/caroussel';
import Carousel from './components/featuredProducts';
import Blogs from './components/blogs';
import Our from './components/ourProducts';
import Follow from './components/follow';

const Home = () => {
    return (
        <div>
        <AnimatedSlide></AnimatedSlide> 
        <Product></Product>
        <Carousel></Carousel>
        <Our></Our>
        <Blogs></Blogs>
        <Follow></Follow>
        </div>
    );
};

export default Home;