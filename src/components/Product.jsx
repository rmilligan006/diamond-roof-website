import React from "react";
import oldShingles from "../images/gallery/products/oldShingles.png";
import imgLeft from "../images/gallery/products/imgLeft.png";
import imgRight from "../images/gallery/products/imgRight.png";
import roofOverView from "../images/gallery/products/roofOverview.png";
import diamondShingle from "../images/gallery/products/diamondShingle.png";
import rectShingle from "../images/gallery/products/rectShingle.png";
import colors from "../images/gallery/products/colors.png";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="px-10 py-10">
          <div className="bg-gray-600 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 max-w-[1000px]">
            <p className="text-6xl font-bold text-white px-2 py-2 text-center flex items-center justify-center">
              OUR PRODUCT
            </p>
            <p className="text-white flex items-center justify-center text-center px-5 py-5">
              Innovative, fire resistant, long lasting, durable, environmentally
              friendly and even mildew resistant - a roof that will last a
              lifetime and beyond.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-[1000px]">
          <p className="text-xl font-serif font-thin px-10">
            In North America metal roofing was one of the primary forms of
            roofing from 1890 to 1920 and many of those roofs are still
            protecting the homeowners' investments today. We estimate life
            expectancy of our shingles conservatively at 50 years, but have
            reason to expect nearly twice that life span.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={oldShingles}
            alt="Old Shingles"
            className="flex items-center justify-center w-[350px] py-5"
          />
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p className="text-xl">
            The Diamond Steel Roofing System was designed and developed by
            innovative roofing and construction specialist Murray Simpson by
            applying 25 years of building experience. Using the highest quality
            steel and paint finishes, Diamond Steel shingles are highly
            windproof, water tight, long lasting and beautiful!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] pb-5">
          <img
            src={imgLeft}
            alt="Roof"
            className="h-[250px] sm:w-[330px] m-2"
          />
          <img src={imgRight} alt="Roof" className="h-[250px]  m-2" />
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p className="text-xl">
            Shipping all over Canada and the United States. Diamond Steel
            Roofing is proven in any climate, whether it be the wildfires in
            Alberta, tornados in Kentucky, or snow load in Nova Scotia. Steel
            doesn't burn, and protects your home or building from airborne
            cinders. Steel also does not hold moisture and prevents the growth
            of mildew and moss.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p className="text-xl">
            A Diamond Steel roof will not end up in a landfill site like
            asphalt, leaching tar and petrochemical products into the watershed.
            If future generations want to replace a Diamond Steel Roofing System
            they can recycle ALL components, which would be melted down and made
            into new metal products.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p>
            Our product is used not only used for roofing but wall
            cladding(siding) and ceiling cladding for a unique look.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p>
            Our simple design makes installation possible for DIY's and new
            contractors. Shingles are fastened with common 1-1/4" galvanized
            roofing nails, and no strapping results in easier and faster
            installation.
          </p>
        </div>
        <div className="px-5 py-10">
          <img src={roofOverView} alt="Roof Design" />
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p>
            There is a Diamond Roof for every taste and architectural detail. A
            variety of high quality, non-fading colour finishes and 2 Standard
            profiles are available: Diamond and Rectangular. The 6 Standard
            colours from the Granite Deep Mat paint finish are: Graphite Grey,
            Slate Grey, Jet Black, Chrome Green, Oxide Red & Sephia Brown.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] pb-10">
          <img src={diamondShingle} alt="Roof" />
          <img src={rectShingle} alt="Roof" />
        </div>
        <div className="pb-10 w-[400px] sm:w-[700px]">
          <img src={colors} alt="color shades" />
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p>
            On special order other paint finishes and other materials such as
            solid copper are available.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <p>
            On request stiffening pattern can be removed and custom rhomboid
            styles and sizes can be made.
          </p>
        </div>
        <div className="flex items-center justify-center max-w-[1000px] text-xl font-serif py-5 px-10">
          <Link to="/contact">
            <button className="bg-gray-600 px-10 py-5 text-white rounded-lg shadow-lg shadow-black hover:bg-slate-200 hover:text-black  hover:ease-in-out duration-300">
              Contact us for samples.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
