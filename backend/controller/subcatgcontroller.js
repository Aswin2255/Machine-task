import Categorymodal from "../models/categories.js";
import Subcatagorymodal from "../models/subcatagories.js";

export const getAllcatg = async (req, res) => {
  try {
    /*const {name,subcatagory,count} = req.body
    const newsub = new Categorymodal({
        name,
        subcatagory,
        count
    })
    const savedsub = await newsub.save()
    console.log(savedsub)*/
    const { id } = req.params;
    const allsubcatg = await Subcatagorymodal.find({ maincatagory: id });
    if (allsubcatg.length) {
      res
        .status(200)
        .json({ status: true, allsubcatg, message: "succesfully fetched all" });
    } else {
      const allsubcatg = await Categorymodal.find({ subcatagory: id });
      res
        .status(200)
        .json({ status: true, allsubcatg, message: "succesfully fetched all" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
};
