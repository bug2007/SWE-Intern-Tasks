import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductComparison from "./components/ProductComparison";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";

import { useSelector } from 'react-redux';


const COMPONENTS = {
  Home,
  Shop,
  SingleProduct,
  ProductComparison,
  Cart,
  Checkout,
  Contact
}

function App() {
  const currentComponent = useSelector(state => state.component.currentComponent);
  const CurrentComponent = COMPONENTS[currentComponent];

  return (
    <>
      <Navbar />
      <CurrentComponent />
      <Footer />
    </>
  )
}  

export default App;