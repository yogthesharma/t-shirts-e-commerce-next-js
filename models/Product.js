import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String },
    brandName: { type: String },
    price: { type: Number },
    discount: { type: Number },
    catagory: { type: String },
    sizes: { type: Array },
    colors: { type: Array },
    material: { type: String },
    productImage: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
