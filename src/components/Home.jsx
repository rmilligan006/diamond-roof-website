import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import carousel1 from "../images/carousel1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reviews from "./Reviews";

const images = [
  require("../images/carousel1.jpg"),
  require("../images/carousel2.jpg"),
  require("../images/carousel3.jpg"),
  require("../images/carousel4.jpg"),
  require("../images/carousel5.jpg"),
  require("../images/carousel6.jpg"),
  require("../images/carousel7.jpg"),
  require("../images/carousel8.jpg"),
  require("../images/carousel9.jpg"),
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="flex flex-col w-[100%] text-center">
        <div>
          <p className="text-2xl font-bold pb-1 m-10">
            The Diamond Roof System was designed and developed by innovative
            roofing and construction specialist Murray Simpson
          </p>
          <p className="text-md font-extralight pb-1 m-6">
            Applying 25 years of creative experience and working with the
            highest quality craftspeople, steel, and colour finishes, Diamond
            Steel Shingles are beautiful, highly windproof, water tight, and
            long last
          </p>
        </div>
        <div className="border-b-2 border-b-slate-200 mb-5"></div>
        <div className="w-full h-screen text-white relative flex items-center justify-center">
          <img
            src={carousel1}
            alt="image of a house"
            className="h-full w-full object-cover -z-0"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black/50"></div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 h-full flex justify-center items-center flex-col text-center w-full m-auto p-4"
          >
            <motion.h1 className="text-4xl tracking-wide font-bold mb-10">
              Click here to see our latest work.
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              type="button"
              onClick={() => this.setState({ isOpen: true })}
              className="bg-slate-200  flex items-center justify-center text-gray-800 rounded-lg text-2xl px-4 py-4 hover:bg-slate-800 hover:text-white ease-in-out duration-500 "
            >
              Samples
            </motion.button>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </motion.div>
        </div>
        <div className="border-b-4 mt-5 border-b-slate-200"></div>
        <div className="flex items-center justify-center mt-5 mb-10">
          <Link to="/product">
            <button className="bg-gray-200 mx-1 sm:mx-5 shadow-lg shadow-black text-black px-10 py-3 rounded-lg hover:bg-slate-800 hover:text-white ease-in-out duration-500">
              Our Product
            </button>
          </Link>
          <Link to="/gallery">
            <button className="bg-gray-200 mx-1 sm:mx-5 shadow-lg shadow-black text-black px-10 py-3 rounded-lg hover:bg-slate-800 hover:text-white ease-in-out duration-500">
              Our Gallery
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-gray-200 mx-1 sm:mx-5 shadow-lg shadow-black text-black px-10 py-3 rounded-lg hover:bg-slate-800 hover:text-white ease-in-out duration-500">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="border-t-8 border-t-gray-700"></div>
        <div>
          <Reviews />
        </div>
      </div>
    );
  }
}
