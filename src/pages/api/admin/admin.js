import nc from "next-connect";
// database import
import initDB from "../../../../lib/initDB";
// model import
import Product from "../../../../models/Product";

// starting database
initDB();
const handler = nc()
  // this is for adding user in the database
  .post(async (req, res, next) => {
    const {
      productName,
      brandName,
      price,
      discount,
      catagory,
      sizes,
      colors,
      material,
      productImage,
    } = req.body;

    const product = new Product({
      productName,
      brandName,
      price,
      discount,
      catagory,
      sizes,
      colors,
      material,
      productImage,
    });

    await product
      .save()
      .then((response) =>
        res
          // .send("Product Saved Successfully")
          .json({ response: response.productImage })
      )
      .catch((error) => res.send("Some Error Occured In Saving Product."));
  });

export default handler;
