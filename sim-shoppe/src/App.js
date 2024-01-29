import Product from "./components/product/Product"
import Header from "./components/layout/Header"
import Navbar from "./components/layout/Navbar"
import NotFound from "./components/utils/NotFound"
import { Routes, Route } from "react-router-dom";

const App = () => {  
  return (
    <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/404" element={ <NotFound/> }/>
        <Route path ="/:category?" element={ <Product/> } />
        <Route component={NotFound} />
        {/* <Navigate to="/404" /> */}
      </Routes>
    </>
  
  )
}
export default App;
