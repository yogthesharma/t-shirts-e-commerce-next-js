import React from "react";
import Slider from "react-slick";
import styles from "./Index.module.css";
import Image from "next/image";

const Index = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider className={styles.slider} {...settings}>
        <div>
          <Image
            className={styles.image}
            src="/home-images/t-shirt-1.jpg"
            alt="t-shirt-image"
            layout="fill"
            objectPosition="50% 50%"
          />
        </div>
        <div>
          <Image
            src="/home-images/t-shirt-2.jpg"
            alt="t-shirt-image"
            layout="fill"
          />
        </div>
        <div>
          <Image
            src="/home-images/t-shirt-3.jpg"
            alt="t-shirt-image"
            layout="fill"
          />
        </div>
        <div>
          <Image
            src="/home-images/t-shirt-4.jpg"
            alt="t-shirt-image"
            layout="fill"
          />
        </div>
        <div>
          <Image
            src="/home-images/t-shirt-5.jpg"
            alt="t-shirt-image"
            layout="fill"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Index;
