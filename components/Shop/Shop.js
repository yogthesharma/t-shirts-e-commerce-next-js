import React from "react";
import styles from "./Shop.module.css";
import { useRouter } from "next/router";

const Shop = ({ data }) => {
  // getting the array of the items
  const dataArr = data.data;

  // defining the router
  const router = useRouter();

  // handling the click on the items
  const itemClick = (id) => {
    router.push({ pathname: "/product/[id]", query: { id } });
  };
  return (
    <div className={styles.shopItems}>
      {dataArr &&
        dataArr.map((item) => {
          return (
            <article
              onClick={() => itemClick(item._id)}
              key={item._id}
              className={styles.item}
            >
              <div className={styles.itemImage}>
                <img src={item.productImage[0]} layout="fill" />
              </div>
              <div className={styles.itemDetails}>
                <h2>
                  <strong>{item.productName}</strong>
                </h2>
                <p>
                  &#x20B9;<strike>{item.price}</strike>{" "}
                  <strong>
                    &#x20B9;
                    {item.price - (item.price * item.discount) / 100}
                  </strong>
                </p>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default Shop;
