import React from "react";
import Residential from "../components/galleryComponents/Residental";
import Commercial from "../components/galleryComponents/Commercial";
import Custom from "../components/galleryComponents/Special";

const Gallery = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <div className="flex items-center justify-center flex-col">
          <Residential />
          <Commercial />
          <Custom />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
