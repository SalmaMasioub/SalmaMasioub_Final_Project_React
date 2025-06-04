import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import images from '../constant/images';

const Navbar = () => {
    return (
        <>
            <header className='w-[25%] h-[100vh] fixed bg-[#ffffff] border-r-1 border-gray-300 '>
                <div className='flex flex-col  gap-[10vh] items-center p-10'>

                   <img src={images.logo}  />
                    <div className='flex gap-6 items-center '>
                        <a className='w-[7vh]  border-r-1 border-black/30 hover:text-red-600 text-gray-600/60 ' href=""><BsPersonCircle size={"3.7vh"} /></a>
                        <a className='hover:text-red-400 text-gray-600/60 ' href=""><IoBagOutline size={"3.7vh"} /></a>

                    </div>

                    <nav className='flex flex-col gap-5 text-center'>
                        <Link to={"/"} className='hover:text-red-600' >Home</Link>
                        <Link to={"/product"} className='hover:text-red-600' href="">Shop</Link>
                        <Link to={""} className='hover:text-red-600' href="">Sale</Link>
                        <Link to={""} className='hover:text-red-600' href="">Features</Link>
                        <Link to={"/blogs"} className='hover:text-red-600' href="">Blog</Link>
                        <Link to={"/about"} className='hover:text-red-600' href="">About</Link>
                        <Link to={"/contact"} className='hover:text-red-600' href="">Contact</Link>
                    </nav>



                    <div className='flex gap-5'>
                        <a className='hover:text-red-600 text-gray-600/60 ' href=""><FaFacebookF   /></a>
                        <a className='hover:text-red-600 text-gray-600/60 ' href=""><FaTwitter  /></a>
                        <a className='hover:text-red-600 text-gray-600/60 ' href=""><FaPinterestSquare  /></a>
                        <a className='hover:text-red-600 text-gray-600/60 ' href=""><FaGooglePlusG  /></a>
                        <a className='hover:text-red-600 text-gray-600/60 ' href=""><FaInstagram  /></a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;