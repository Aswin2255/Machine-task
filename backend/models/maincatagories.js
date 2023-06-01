// modal of all major catogories

import mongoose from "mongoose";
const Maincatagory = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
const Maincatagorymodal = mongoose.model("maincatg", Maincatagory);
export default Maincatagorymodal;
