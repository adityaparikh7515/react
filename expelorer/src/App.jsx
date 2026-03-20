import Card from "./components/Card";
import Header from "./components/Header";
import Home from "./pages/Home";
import { products } from "./data/products.js";
import Footer from "./components/Footer.jsx"

const App =()=>{
  return(
    <>
    <Header/>
    <Home/>
    <Card products={products}/>
    <Footer/>
    </>
  )
}

export default App;