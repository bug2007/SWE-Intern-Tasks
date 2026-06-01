import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import DynamicBanner from "./components/DynamicBanner";
import HomeBanner from "./components/HomeBanner";
import BrowseRange from "./components/BrowseRange";
import Products from "./components/Products";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 0)
    }
    handleScroll(); // setting it immediately as soon as the App renders as on page load, the page might already be scrolled
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <Navbar scroll={scroll} />  
      <HomeBanner />
      <BrowseRange />
      <Products />
      {/* <DynamicBanner title="Shop" /> */}
      {/* <Features /> */}
      <Footer /> 
    </>
  )
}

export default App;