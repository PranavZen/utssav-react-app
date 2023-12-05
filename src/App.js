import "../src/assets/sass/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Header/Navbar";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import ProductDetails from "./pages/ProductDetails";
import "react-loading-skeleton/dist/skeleton.css";
import FeaturedList from "./pages/FeaturedList";
import DataFetch from "./pages/DataFetch";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetails/:category_name/:proName" element={<ProductDetails />} />
        <Route path="/get_collection_list" element={<FeaturedList />} />
        {/* <Route path="/DataFetch/:category_name/:product_name" element={<DataFetch />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
