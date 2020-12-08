import Axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  var initVals = {
    productName: "",
    brandName: "",
    price: "",
    discount: "",
    catagory: "",
    sizes: [],
    colors: [],
    material: "",
    productImage: "",
  };

  const [product, setProduct] = useState(initVals);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Axios.post("/api/admin/admin", product)
      .then(async (res) => {
        console.log(res.data);
        alert("Item Registered");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    var { name, value } = e.target;

    if (name == "colors") {
      const colors = value.split(",");
      setProduct({ ...product, colors });
    } else if (name == "productImage") {
      const productImage = value.split(",");
      console.log(productImage);
      setProduct({ ...product, productImage });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };
  const handleChecks = (e) => {
    var { name, value } = e.target;
    setProduct((product) => ({
      ...product,
      [name]: [...product.sizes, value],
    }));
  };

  return (
    <div>
      <h2>Add new product.</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* name of product */}
        <div>
          <label htmlFor="name">Name Of Product:</label>
          {"   "}
          <input
            id="name"
            type="text"
            name="productName"
            value={product.productName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* brand of product */}
        <div>
          <label htmlFor="brand">Name Of Brand:</label>
          {"   "}
          <input
            id="brand"
            type="text"
            name="brandName"
            value={product.brandName}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* price of product */}
        <div>
          <label htmlFor="price">Price:</label>
          {"   "}
          <input
            id="price"
            type="number"
            name="price"
            value={product.price}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* discount of product */}

        <div>
          <label htmlFor="discount">Discount: </label>
          {"   "}
          <input
            name="discount"
            type="radio"
            value="15"
            onChange={(e) => handleChange(e)}
          />
          15% {"   "}
          <input
            name="discount"
            type="radio"
            value="25"
            onChange={(e) => handleChange(e)}
          />
          25% {"   "}
          <input
            name="discount"
            type="radio"
            value="35"
            onChange={(e) => handleChange(e)}
          />
          35% {"   "}
          <input
            name="discount"
            type="radio"
            value="45"
            onChange={(e) => handleChange(e)}
          />
          45% {"   "}
        </div>

        {/* catagory of item */}
        <div>
          <label htmlFor="catagory">Catagory: {"   "}</label>
          <select id="select" name="catagory" onChange={(e) => handleChange(e)}>
            <option value="Basic half sleeve T-shirt">
              Basic half sleeve T-shirt
            </option>
            <option value="Long sleeve Crew neck T-shirts">
              Long sleeve Crew neck T-shirts
            </option>
            <option value="Polo collar t-shirt">Polo collar t-shirt</option>
            <option value="V-neck t-shirt">V-neck t-shirt</option>
            <option value="Douche bag neck t-shirt">
              Douche bag neck t-shirt
            </option>
            <option value="Henley collar T-shirt">Henley collar T-shirt</option>
            <option value="Baseball Tshirt">Baseball Tshirt</option>
            <option value="Raglan sleeve t-shirt – Long sleeve">
              Raglan sleeve t-shirt – Long sleeve
            </option>
            <option value="Turtle neck shirt">Turtle neck shirt</option>
            <option value="Ringer T – shirt">Ringer T – shirt</option>
            <option value="Cap sleeve t-shirt">Cap sleeve t-shirt</option>
            <option value="Half Tshirt (Singlet)">Half Tshirt (Singlet)</option>
            <option value="Muscle Shirt">Muscle Shirt</option>
            <option value="Pocket T-shirt">Pocket T-shirt</option>
          </select>
        </div>

        {/* size of t-product */}
        <div>
          <label htmlFor="sizes">Sizes: </label>
          <input
            type="checkbox"
            name="sizes"
            id="sizes"
            value="XS"
            onChange={(e) => handleChecks(e)}
          />
          XS {"   "}
          <input
            type="checkbox"
            name="sizes"
            id="sizes"
            value="S"
            onChange={(e) => handleChecks(e)}
          />
          S {"   "}
          <input
            type="checkbox"
            name="sizes"
            id="sizes"
            value="M"
            onChange={(e) => handleChecks(e)}
          />
          M {"   "}
          <input
            type="checkbox"
            name="sizes"
            id="sizes"
            value="L"
            onChange={(e) => handleChecks(e)}
          />
          L {"   "}
          <input
            type="checkbox"
            name="sizes"
            id="sizes"
            value="XL"
            onChange={(e) => handleChecks(e)}
          />
          XL {"   "}
          <input
            type="checkbox"
            name="sizes"
            id="sizes"
            value="XXL"
            onChange={(e) => handleChecks(e)}
          />
          XXL {"   "}
        </div>

        {/* colors */}
        <div>
          <label htmlFor="colors">Colors(Seperated by commas): </label>
          <input
            type="text"
            name="colors"
            id="colors"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="material">Material: </label>
          <input
            type="radio"
            id="material"
            name="material"
            value="Cotton"
            onChange={(e) => handleChange(e)}
          />
          Cotton{"   "}
          <input
            type="radio"
            id="material"
            name="material"
            value="Linen"
            onChange={(e) => handleChange(e)}
          />
          Linen{"   "}
          <input
            type="radio"
            id="material"
            name="material"
            value="Polyester"
            onChange={(e) => handleChange(e)}
          />
          Polyester{"   "}
        </div>
        <div>
          Add Image Link Of T-shirt(Seperated By Commas):{" "}
          <input
            type="link"
            name="productImage"
            value={product.productImage}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <input type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default Admin;
