import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";
import carousel4 from "../images/carousel4.jpg";
import carousel5 from "../images/carousel5.jpg";
import carousel6 from "../images/carousel6.jpg";
import carousel7 from "../images/carousel7.jpg";
import carousel8 from "../images/carousel8.jpg";
import carousel9 from "../images/carousel9.jpg";

const Home = () => {
  return (
    <div className="flex flex-col w-[100%] text-center">
      <div>
        <p className="text-2xl font-bold pb-1 m-10">
          The Diamond Roof System was designed and developed by innovative
          roofing and construction specialist Murray Simpson
        </p>
        <p className="text-md font-extralight pb-1 m-6">
          Applying 25 years of creative experience and working with the highest
          quality craftspeople, steel, and colour finishes, Diamond Steel
          Shingles are beautiful, highly windproof, water tight, and long last
        </p>
      </div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        stopOnHover={true}
        renderIndicator={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img
            src={carousel1}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel2}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel3}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel4}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel5}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel6}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel7}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel8}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
        <div>
          <img
            src={carousel9}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
