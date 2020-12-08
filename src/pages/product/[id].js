import React from "react";
import axios from "axios";
import Axios from "axios";
import Product from "../../../components/Product/Product";

const id = ({ product }) => {
  const { productName } = product.data;

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const product = await Axios.post(`http://localhost:3000/api/data/data/`, {
    id: context.params.id,
  });

  return {
    props: {
      product: product.data,
    },
  };
}

export default id;
