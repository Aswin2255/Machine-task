import Maincatagorymodal from "../models/maincatagories.js";

// fetching all main catagories
export const getAllcatg = async (req, res) => {
  try {
    let Maincategory = await Maincatagorymodal.find();

    res
      .status(200)
      .json({ status: true, Maincategory, message: "succesfully fetched all" });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
};
