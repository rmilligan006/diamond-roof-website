import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";

const images = [
  require("../../images/gallery/customTile/custom1.png"),
  require("../../images/gallery/customTile/custom2.png"),
  require("../../images/gallery/customTile/custom3.png"),
  require("../../images/gallery/customTile/custom4.png"),
  require("../../images/gallery/customTile/custom5.png"),
  require("../../images/gallery/customTile/custom6.png"),
  require("../../images/gallery/customTile/custom7.png"),
  require("../../images/gallery/customTile/custom8.png"),
  require("../../images/gallery/customTile/custom9.png"),
  require("../../images/gallery/customTile/custom10.png"),
  require("../../images/gallery/customTile/custom11.png"),
  require("../../images/gallery/customTile/custom12.png"),
  require("../../images/gallery/customTile/custom13.png"),
  require("../../images/gallery/customTile/custom14.png"),
  require("../../images/gallery/customTile/custom15.png"),
];

export default class Special extends Component {
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
      <div className="flex items-center justify-center flex-col">
        <div className="bg-gray-600 rounded-lg shadow-xl text-center max-w-[500px] flex items-center justify-center mb-2 mt-10">
          <p className="text-4xl text-white py-5 px-10">Custom Tile</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 py-10 px-10">
          <img
            src={require("../../images/gallery/customTile/custom1.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] w-[]"
          />
          <img
            src={require("../../images/gallery/customTile/custom2.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
          />
          <img
            src={require("../../images/gallery/customTile/custom3.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] md:w-[500px]"
          />
          <img
            src={require("../../images/gallery/customTile/custom4.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] w-[500px]"
          />
          <img
            src={require("../../images/gallery/customTile/custom15.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer  h-[250px]"
          />
          <img
            src={require("../../images/gallery/customTile/custom6.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] md:w-[500px]"
          />
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
