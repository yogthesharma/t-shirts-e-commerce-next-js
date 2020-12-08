import Axios from "axios";
import React from "react";
import Shop from "../../components/Shop/Shop";
import styles from "../styles/shop.module.css";

const shop = ({ data }) => {
  return (
    <div>
      <section className={styles.shopFilter}></section>
      <Shop data={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const data = await Axios.get("http://localhost:3000/api/data/data");
  return {
    props: { data: data.data },
  };
}

export default shop;
