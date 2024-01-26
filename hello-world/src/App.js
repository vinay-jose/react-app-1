import Product from "./components/product/Product"
import Header from "./components/layout/Header"
import Navbar from "./components/layout/Navbar"
// import { useState } from "react"


const App = () => {  
  return (
    <div>
      <Header/>
      <Navbar/>
      <Product/>
    </div>
  )
}
export default App;
