import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

import { useSelector } from 'react-redux';


const COMPONENTS = {
  home: Home,
  shop: Shop
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