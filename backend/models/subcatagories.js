// model of all sub catagories which come after main catagories

import mongoose, { Mongoose } from "mongoose";
const Subcatagory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    maincatagory: {
      type: mongoose.Types.ObjectId,
      ref: "maincatg",
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
const Subcatagorymodal = mongoose.model("subcatg", Subcatagory);
export default Subcatagorymodal;
