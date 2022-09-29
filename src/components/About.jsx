import React from "react";
import aboutUs from "../images/aboutUs.png";
import article from "../images/WinghamHomeStyle.docx";
import attachment from "../images/attachment.png";

const About = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="px-5 py-5">
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
        <div className="max-w-[1000px]">
          <img src={aboutUs} alt="" />
        </div>
        <div className="flex items-center justify-center max-w-[1000px] flex-col">
          <div>
            <p className="text-xl font-serif font-thin px-10 py-10">
              Applying 25 years of creative experience and working with the
              highest quality craftspeople, steel and colour finishes, Diamond
              Steel Shingles are beautiful, highly windproof, water tight, and
              long lasting.
            </p>
          </div>
          <div>
            <p className="text-xl font-serif font-thin px-10 py-5">
              Diamond Steel Team - many of whom have been involved from the
              beginning - manufacture and quality check each and every piece at
              the production plant in Wingham, Ontario, Canada.
            </p>
          </div>
          <div>
            <p className="text-xl font-serif font-thin px-10 py-5">
              Murray is proud that the ardent do-it-yourselfer, as well as the
              industry professional, appreciates the simple design that requires
              no special installation tools.
            </p>
          </div>
          <div>
            <p className="text-xl font-serif font-thin px-10 py-5">
              Diamond Steel Roofing Systems trains our sales people in every
              aspect of customer service, manufacturing and installation.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[350px] py-5">
              <a href={article} download>
                <img
                  src={attachment}
                  alt=""
                  className="w-[70px] py-2 flex items-center justify-center"
                />
              </a>
              <p className="flex items-center justify-center text-md py-2">
                For an interesting read from 1998 check out this local newspaper
                write up on Diamond Steel Roofing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
