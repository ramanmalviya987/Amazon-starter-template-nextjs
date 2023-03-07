import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className=" relative">
      <div className=" absolute w-ful bg-black l h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      <Carousel
        autoPlay
        interval={5000}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/I/91pzohpvYIL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71SnvcmmGlL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61h3+J34oWL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
