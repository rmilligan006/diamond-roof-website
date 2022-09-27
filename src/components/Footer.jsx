import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full h-full text-white">
      <div className="text-center mb-5">
        <p className="mb-3 py-2">Follow us on Social Media:</p>
        <div className="flex items-center justify-center">
          <Link to="https://www.facebook.com/DiamondSteelRoof?ref=aymt_homepage_panel">
            <AiFillFacebook size={25} className="mx-1" />
          </Link>
          <Link to="https://www.instagram.com/diamondsteelroofing/">
            <AiOutlineInstagram size={25} className="mx-1" />
          </Link>
          <Link to="https://www.youtube.com/user/diamondsteel1">
            <AiOutlineYoutube size={25} className="mx-1" />
          </Link>
          <Link to="https://www.pinterest.ca/diamond_steel/">
            <ImPinterest2 size={20} className="mx-1" />
          </Link>
          <Link to="https://twitter.com/DiamondSteelRoo">
            <AiFillTwitterSquare size={25} className="mx-1" />
          </Link>
        </div>
        <p className="mt-5">Phone: 1-888-810-7663</p>
        <p className="mt-5">Email: sales@diamondroof.on.ca</p>
      </div>
      <p className="text-sm text-center">
        &copy; Diamond Steel Roofing Systems. All Rights reserved.
      </p>
    </div>
  );
};

export default Footer;
