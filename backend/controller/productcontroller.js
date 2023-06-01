import Productmodal from "../models/product.js";

// this will fetch all products
export const getAllproduct = async (req, res) => {
  try {
    /*  const {id} = req.params
        console.log(id)
        const {name,price, 
            maincatagory,
            subcatagory,
            catagory,
            count
            
            } = req.body
            const newpro = new Productmodal({
                name,
                price,
                maincatagory,
                subcatagory,
                catagory,
                count
            })
            const savedpro = await newpro.save()
            console.log(savedpro)*/

    const allproducts = await Productmodal.find();

    res
      .status(200)
      .json({ status: true, allproducts, message: "succesfully fetched all" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, error });
  }
};

// this will fetch products according to catagories
export const getcatgpro = async (req, res) => {
  try {
    const { id } = req.params;

    const allproduct = await Productmodal.find({
      $or: [
        {
          maincatagory: id,
        },
        {
          subcatagory: id,
        },
        {
          catagory: id,
        },
      ],
    });
    res
      .status(200)
      .json({ status: true, allproduct, message: "succesfully fetched all" });
  } catch (error) {
    res.status(400).json({ status: false, error });
  }
};
