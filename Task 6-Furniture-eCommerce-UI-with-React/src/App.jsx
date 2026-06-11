import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductComparison from "./components/ProductComparison";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import CartNotification from "./components/CartNotification";

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { cartActions } from "./store/cart-slice";


const COMPONENTS = {
  Home,
  Shop,
  SingleProduct,
  ProductComparison,
  Cart,
  Checkout,
  Contact,
  Blog
}

function App() {
  const currentComponent = useSelector(state => state.component.currentComponent);
  const CurrentComponent = COMPONENTS[currentComponent];
  const notification = useSelector(state => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(()=> {
      dispatch(cartActions.clearNotification());
    }, 2000);

    return () => clearTimeout(timer);
  }, [notification])

  return (
    <>
      {notification && <CartNotification key={notification.id} message={notification.message} />}
      <Navbar />
      <CurrentComponent />
      <Footer />
    </>
  )
}  

export default App;