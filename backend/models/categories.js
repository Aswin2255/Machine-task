// model of  last category of a product which come after the sub

import mongoose, { Mongoose } from "mongoose";
const Category = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    subcatagory: {
      type: mongoose.Types.ObjectId,
      ref: "subcatg",
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
const Categorymodal = mongoose.model("catg", Category);
export default Categorymodal;
