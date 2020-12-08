import React, { useState } from "react";
import styles from "./Product.module.css";
import Slider from "react-slick";

const Product = ({ product }) => {
  const [size, setSize] = useState();

  const {
    productName,
    productImage,
    brandName,
    price,
    discount,
    material,
    colors,
    sizes,
  } = product.data;

  // for slider configs
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

  // button functionalaties
  const buyNow = () => {
    alert("Buying Item");
  };
  const addToCart = () => {
    alert("Adding Item To Cart");
  };

  const handleSize = (size) => {
    setSize(size);
    console.log(size);
  };
  return (
    <div className={styles.singleItem}>
      <div className={styles.imageClass}>
        <Slider {...settings}>
          <div>
            <img src={productImage[0]} />
          </div>
          <div>
            <img src={productImage[1]} />
          </div>
        </Slider>
      </div>
      <div className={styles.singleItemData}>
        <h1>{productName}</h1>
        <h3>{brandName}</h3>
        <p className={styles.priceSection}>
          <strike>&#x20B9;{price}</strike> &#x20B9;
          <strong>{price - (price * discount) / 100}</strong>
        </p>

        <div className={styles.color} style={{ textTransform: "capitalize" }}>
          Colors:{" "}
          {colors.map((color) => (
            <pre
              style={{ backgroundColor: color }}
              className={styles.colorsDiv}
            ></pre>
          ))}
        </div>
        <div className={styles.material}>
          <strong>Material: </strong>
          {material}
        </div>
        <div className={styles.btnGroup}>
          {sizes &&
            sizes.map((size) => (
              <span key={size}>
                <button onClick={() => handleSize(size)}>{size}</button>
              </span>
            ))}
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.buyNow} onClick={() => buyNow()}>
            Buy Now
          </button>
          <button className={styles.addToCart} onClick={() => addToCart()}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
