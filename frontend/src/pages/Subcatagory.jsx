import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axiosinstance from '../axios/axios'
import Catg from '../components/Catg'
import Products from '../components/Products'
import Loader from '../components/Loader'

function Subcatagory() {
    const {id} = useParams()
    const [subcatg,setsubcatg] = useState([])
    const [product,setproduct] = useState([])
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        axiosinstance.get(`/subcatg/getsubcatg/${id}`).then(({data})=>{
          console.log(data)
            setsubcatg(data.allsubcatg )
        }).catch((er)=>{
            console.log(er)
        })
        axiosinstance.get(`/product/getallproduct/${id}`).then(({data})=>{
          setproduct(data.allproduct)
          setloading(false)
        }).catch((er)=>{
          console.log(er)
        })

    },[id])
  return (
    <>
          <Navbar />
   {
    loading ?  <div className="flex justify-center items-center"><Loader/></div> : <>
      {
      subcatg.length ? <>
       <div className="flex items-center justify-center m-10">
      
      <h1 className="items-center font-bold text-2xl ">All catagories</h1>
    </div>
    <div className="flex justify-center">
      <div className="lg:grid  grid-cols-3 gap-4">
      {
          subcatg.map((e)=>{
            return (
              <Catg key={e._id} item={e}/>
            )
          })
        }
       
      </div>
    </div>
      </> : ''
     }
    
    <div className="flex items-center justify-center m-10">
        <h1 className="items-center font-bold text-2xl ">Products</h1>
      </div>
      <div className="flex justify-center">
       <div className="lg:grid grid-cols-3 gap-4">
        {
          product.map((e)=>{
            return (
              <Products key={e._id} item={e}/>
            )
          })
        }

       </div>
      </div>
    </>
   }
      
    </>
  )
}

export default Subcatagory
