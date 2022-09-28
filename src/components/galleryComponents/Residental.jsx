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
  require("../../images/gallery/residential/residential16.png"),
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
      <div className="w-[200px]">
        <img
          src={require("../../images/gallery/residential/residential16.png")}
          alt=""
          onClick={() => this.setState({ isOpen: true })}
        />
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
