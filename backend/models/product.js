import mongoose, { Mongoose } from "mongoose";
const Product = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maincatagory: {
      type: mongoose.Types.ObjectId,
      ref: "maincatg",
    },
    subcatagory: {
      type: mongoose.Types.ObjectId,
      ref: "subcatg",
    },
    catagory: {
      type: mongoose.Types.ObjectId,
      ref: "catg",
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Productmodal = mongoose.model("product", Product);
export default Productmodal;
