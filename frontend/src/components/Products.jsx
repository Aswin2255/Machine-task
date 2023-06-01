import { useState } from "react"
import axiosinstance from "../axios/axios"
import { Link, useParams } from "react-router-dom"


function Products({item}) {
  
  return (
    <div>
      
      
            <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900">
        {item.name}
      </h5>
      <p>
       Rs {item.price}
      </p>
    </p>
         
        
  
  </div>
      
  )
}

export default Products
