import React, { Component } from "react";
import Lightbox from "react-18-image-lightbox";

const images = [
  require("../../images/gallery/commercial/commercial1.png"),
  require("../../images/gallery/commercial/commercial2.png"),
  require("../../images/gallery/commercial/commercial3.png"),
  require("../../images/gallery/commercial/commercial4.png"),
  require("../../images/gallery/commercial/commercial5.png"),
  require("../../images/gallery/commercial/commercial6.png"),
  require("../../images/gallery/commercial/commercial7.png"),
  require("../../images/gallery/commercial/commercial8.png"),
  require("../../images/gallery/commercial/commercial9.png"),
  require("../../images/gallery/commercial/commercial10.png"),
  require("../../images/gallery/commercial/commercial11.png"),
  require("../../images/gallery/commercial/commercial12.png"),
  require("../../images/gallery/commercial/commercial13.png"),
];

export default class Commercial extends Component {
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
          <p className="text-4xl text-white py-5 px-10">Commercial</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 py-10 px-10">
          <img
            src={require("../../images/gallery/commercial/commercial1.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] md:w-[500px]"
          />
          <img
            src={require("../../images/gallery/commercial/commercial2.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] md:w-[500px]"
          />
          <img
            src={require("../../images/gallery/commercial/commercial7.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px] md:w-[520px]"
          />
          <img
            src={require("../../images/gallery/commercial/commercial4.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer h-[250px]"
          />
          <img
            src={require("../../images/gallery/commercial/commercial10.png")}
            alt="Click here to see slideshow!"
            onClick={() => this.setState({ isOpen: true })}
            className="cursor-pointer  h-[250px]"
          />
          <img
            src={require("../../images/gallery/commercial/commercial6.png")}
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
