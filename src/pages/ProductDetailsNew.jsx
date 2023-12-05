import React from "react";
import SyncSlider from "../components/Slider/SyncSlider";
import ProductSummery from "../components/ProductsDetailsBox/ProductSummery";
// console.log(jsonData);
function ProductDetailsNew() {
  return (
    <>
      <section id="productDetails">
        <div className="container">
          <div className="product_itemDetails_wrapper">
            <SyncSlider />
            <ProductSummery />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailsNew;
