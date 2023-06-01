import { useEffect, useState } from "react";
import Catg from "../components/Catg";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import axiosinstance from "../axios/axios";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [product,setproduct] = useState([])
  const [maincatg,setmaincatg] = useState([])
  const [catloading,setcatloading] = useState(false)
  const [proloading,setproloading] = useState(false)

  const getallcatg =  ()=>{
    setcatloading(true)
    axiosinstance.get('/maincatg/getallcatg').then(({data})=>{
      setmaincatg(data.Maincategory)
      setcatloading(false)
    }).catch((er)=>{
      setcatloading(false)
      alert('error ocured')
    })
    
  }
  const getproduct = ()=>{
    setproloading(true)
    axiosinstance.get('/product/getallproduct').then(({data})=>{
      //console.log(data)
      setproduct(data.allproducts)
      setproloading(false)
    }).catch((er)=>{
      console.log(er)
    })
  
  }
  useEffect(()=>{
   getallcatg()
   getproduct()
  
  },[])
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center m-10">
      
        <h1 className="items-center font-bold text-2xl ">All catagories</h1>
      </div>
   
     <>
       {
        catloading ? <div className="flex justify-center items-center">
          <Loader/>
        </div> : <div className="flex justify-center">
        <div className="lg:grid  grid-cols-3 gap-4">
          {
            maincatg.map((e)=>{
              return (
                <Catg key={e._id} item={e}/>
              )
            })
          }
         
        </div>
      </div>
       }
      <div className="flex items-center justify-center m-10">
        <h1 className="items-center font-bold text-2xl ">Products</h1>
      </div>
   {
    proloading ? <div className="flex justify-center items-center"><Loader/></div> : <>  <div className="flex justify-center">
    <div className="lg:grid grid-cols-3 gap-4">
     {
       product.map((e)=>{
         return (
           <Products key={e._id} item={e}/>
         )
       })
     }

    </div>
   </div></>
   }
    </>
   
    </>
  );
}

export default Home;
