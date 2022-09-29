import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";

const images = [
  require("../../images/gallery/residential/residential1.png"),
  require("../../images/gallery/residential/residential2.png"),
  require("../../images/gallery/residential/residential3.png"),
  require("../../images/gallery/residential/residential4.png"),
  require("../../images/gallery/residential/residential5.png"),
  require("../../images/gallery/residential/residential6.png"),
  require("../../images/gallery/residential/residential7.png"),
  require("../../images/gallery/residential/residential8.png"),
  require("../../images/gallery/residential/residential9.png"),
  require("../../images/gallery/residential/residential10.png"),
  require("../../images/gallery/residential/residential11.png"),
  require("../../images/gallery/residential/residential12.png"),
  require("../../images/gallery/residential/residential13.png"),
  require("../../images/gallery/residential/residential14.png"),
  require("../../images/gallery/residential/residential15.png"),
];

export default class Residental extends Component {
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
          <p className="text-4xl text-white py-5 px-10">Residential</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 py-10 px-10">
          <img
            src={require("../../images/gallery/residential/residential1.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
          />
          <img
            src={require("../../images/gallery/residential/residential2.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
          />
          <img
            src={require("../../images/gallery/residential/residential3.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
          />
          <img
            src={require("../../images/gallery/residential/residential4.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
          />
          <img
            src={require("../../images/gallery/residential/residential15.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer  h-[250px]"
          />
          <img
            src={require("../../images/gallery/residential/residential6.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
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
