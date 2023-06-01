
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./components/Products"
import Subcatagory from "./pages/Subcatagory"




function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element ={<Subcatagory/>}></Route>

     
    </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App
