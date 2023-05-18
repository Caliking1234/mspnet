import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import Slider from "react-slick";

import itImg from "../../images/itImg.png";
import itImg2 from "../../images/itImg2.avif";
import itImg3 from "../../images/itImg3.webp";
import itInt from "../../images/itIntegration.jpeg";
import img from "../../images/img.jpeg";

import Slide1 from "../../images/SLIDE-1.jpg";
import Slide2 from "../../images/SLIDE-2.jpg";
import Slide3 from "../../images/SLIDE-3.jpg";

// import { Carousel, Wrap } from "./components/style";
// import { Carousel, Wrap } from './style';

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const Wrap = styled.div`
    cursor: pointer;
    height: 50dvh;
    img {
      //border: 4px solid black;
      width: 100%;
      height: 100%;

      transition-duration: 500ms;
      &:hover {
        border: 4px solid rgba (249, 249, 249, 0.8);
      }
    }
  `;

  const Carousel = styled(Slider)`
    margin: 10px 5px;
    .slick-list {
      overflow: hidden;
    }
    ul li button {
      &:before {
        font-size: 10px;
        color: ${(props) => props.theme.white};
      }
    }
    li.slick-active button:before {
      color: ${(props) => props.theme.white};
    }
    button {
      z-index: 1;
    }
    .slick-dots {
      bottom: 25px;
      padding-right: 20px;
    }
    .slick-dots li button:before {
      font-size: 10px;
    }

    .slick-next {
      right: 10px;
    }
    .slick-prev {
      left: 10px;
    }
    .slick-next:before {
    }
    .slick-prev:before {
    }
  `;
  return (
    <div className="mt-[80px]">
      <Carousel {...settings} className=" -z-0">
        <Wrap className="relative">
          <div className=" absolute top-[10%] translate-x-[-10%] left-[10%] text-white w-64 text-center">
            <div>
              <h1 className=" text-4xl my-5  font-extrabold">
                IT Structure Services
              </h1>
              <p className=" text-xs md:text-sm">
                Helping You Manage IT Infrastructure Efficiently
              </p>
            </div>
            <button className=" my-5 text-white bg-black  px-5 py-2 rounded-md">
              Click Here
            </button>
          </div>
          <img src={Slide1} alt="badag" />
        </Wrap>
        <Wrap className=" relative">
          <div className=" absolute top-[20%] translate-x-[-20%] left-[10%] text-white w-56 text-center">
            <div>
              <h1 className=" text-4xl my-5  font-extrabold">SD-WAN</h1>
              <p className=" text-xs md:text-sm">The New Normal For Network</p>
            </div>
            <button className=" my-5 text-white bg-black  px-5 py-2 rounded-md">
              Click Here
            </button>
          </div>
          <img src={Slide2} />
        </Wrap>
        <Wrap className="relative">
          <div className=" absolute top-[10%] translate-x-[-10%] left-[10%] text-white w-56 text-center">
            <div>
              <h1 className=" text-3xl my-5  font-extrabold">IT-Integration</h1>
              <p className=" text-xs md:text-sm">
                Adjust The Customer's IT Infrastructure To New,Ever Growing
                Business & Technical Requirements
              </p>
            </div>
            <button className=" my-5 text-white bg-black  px-5 py-2 rounded-md">
              Click Here
            </button>
          </div>
          <img src={Slide3} alt="badging" />
        </Wrap>
        <Wrap className="relative">
          <div className=" absolute top-[10%] translate-x-[-10%] left-[10%] text-white w-72 text-center">
            <div>
              <h1 className=" text-3xl my-5 font-extrabold">
                Global Operation Center
              </h1>
              <p className=" text-xs md:text-sm">
                MSP GLobal Operations Center (MGOC) Provides Technical Support
                For Monitoring & Services
              </p>
            </div>
            <button className=" my-2 md:my-5 text-white bg-black  px-2 md:px-5 py-2 rounded-md">
              Click Here
            </button>
          </div>
          <img
            src={Slide2}
            // src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7487B12724430E5DF3FBDBC9D1E1F9334674F469BA03CEFCFF700138773493C0/scale?width=1440&aspectRatio=3.91&format=jpeg"
            alt="scale"
          />
        </Wrap>
      </Carousel>
    </div>
  );
};

export default ImgSlider;
