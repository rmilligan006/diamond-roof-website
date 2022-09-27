import React, { useState } from "react";
import Logo from "../images/diamond.png";
import { motion } from "framer-motion";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="sticky top-0 z-50 flex-wrap w-full h-[130px] md:h-[200px]  justify-center items-stretch border-b-2">
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            src={Logo}
            alt="Diamond Logo"
            className="h-[120px] md:h-[100px] border-b-2 border-black"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center pr-2 invisible md:visible"
        >
          <Link to="https://www.facebook.com/DiamondSteelRoof?ref=aymt_homepage_panel">
            <AiFillFacebook size={25} className="mx-2" />
          </Link>
          <Link to="https://www.instagram.com/diamondsteelroofing/">
            <AiOutlineInstagram size={25} className="mx-3" />
          </Link>
          <Link to="https://www.youtube.com/user/diamondsteel1">
            <AiOutlineYoutube size={25} className="mx-3" />
          </Link>
          <Link to="https://www.pinterest.ca/diamond_steel/">
            <ImPinterest2 size={20} className="mx-3" />
          </Link>
          <Link to="https://twitter.com/DiamondSteelRoo">
            <AiFillTwitterSquare size={25} className="mx-2" />
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center justify-center"
        >
          <Link to="/">
            <li className="m-5 hover:border-b-2 hover:border-black hover:ease-in duration-100">
              Home
            </li>
          </Link>
          <Link to="/product">
            <li className="m-5 hover:border-b-2 hover:border-black hover:ease-in duration-100">
              Our Product
            </li>
          </Link>
          <Link to="/gallery">
            <li className="m-5 hover:border-b-2 hover:border-black hover:ease-in-out duration-100">
              Our Gallery
            </li>
          </Link>
          <Link to="/installation">
            <li className="m-5 hover:border-b-2 hover:border-black hover:ease-in duration-100">
              Installation
            </li>
          </Link>
          <Link to="/about">
            <li className="m-5 hover:border-b-2 hover:border-black hover:ease-in duration-100">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="m-5 hover:border-b-2 hover:border-black hover:ease-in duration-100">
              Contact Us
            </li>
          </Link>
        </motion.ul>
        {/* Hamburger time */}
        <div
          onClick={handleClick}
          className="md:hidden z-10 absolute top-2 left-4"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#fff] flex flex-col justify-center items-center"
          }
        >
          <img
            src={Logo}
            alt="Diamond Logo"
            className="h-[120px]  absolute top-20 border-b-2 border-black"
          />
          <Link onClick={handleClick} to="/">
            <li className="m-5">Home</li>
          </Link>
          <Link onClick={handleClick} to="/product">
            <li className="m-5">Our Product</li>
          </Link>
          <Link onClick={handleClick} to="/gallery">
            <li className="m-5">Our Gallery</li>
          </Link>
          <Link onClick={handleClick} to="/installation">
            <li className="m-5">Installation</li>
          </Link>
          <Link onClick={handleClick} to="/about">
            <li className="m-5">About Us</li>
          </Link>
          <Link onClick={handleClick} to="/contact">
            <li className="m-5">Contact Us</li>
          </Link>
          <div className="flex items-center justify-center pr-4">
            <Link to="https://www.facebook.com/DiamondSteelRoof?ref=aymt_homepage_panel">
              <AiFillFacebook size={40} className="mx-2" />
            </Link>
            <Link to="https://www.instagram.com/diamondsteelroofing/">
              <AiOutlineInstagram size={40} className="mx-3" />
            </Link>
            <Link to="https://www.youtube.com/user/diamondsteel1">
              <AiOutlineYoutube size={40} className="mx-3" />
            </Link>
            <Link to="https://www.pinterest.ca/diamond_steel/">
              <ImPinterest2 size={30} className="mx-3" />
            </Link>
            <Link to="https://twitter.com/DiamondSteelRoo">
              <AiFillTwitterSquare size={40} className="mx-2" />
            </Link>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
