import React from "react";
import Residential from "../components/galleryComponents/Residental";

const Gallery = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="px-10 py-5">
          <div className="bg-gray-600 rounded-lg shadow-xl text-center max-w-[500px] flex items-center justify-center">
            <p className="text-7xl font-mono text-white px-20 py-4">
              Residential
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Residential />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
