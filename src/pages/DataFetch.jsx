import React, { useEffect, useState } from "react";
import PageBreadCrum from "../components/Breadcrum/PageBreadCrum";
import SyncSlider from "../components/Slider/SyncSlider";
import ProductSummery from "../components/ProductsDetailsBox/ProductSummery";
import { useParams } from "react-router-dom";

const DataFetch = () => {
  const params = useParams();
  const { product_name } = params;
  const [product, setProduct] = useState(null);
    console.log(product_name)
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!product_name) {
          console.error("Error: product_name is undefined.");
          return;
        }
  
        const postData = {
          option_value_id: 684,
        };
  
        const response = await fetch(
          "https://root.utssavjewels.com/app/consumer/services_v1/product_details",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: Object.keys(postData)
              .map(
                (key) =>
                  encodeURIComponent(key) +
                  "=" +
                  encodeURIComponent(postData[key])
              )
              .join("&"),
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (!data.productDetails) {
          throw new Error("Invalid response format: productDetails is missing.");
        }
  
        const categories = Array.isArray(data.productDetails)
          ? data.productDetails
          : [];
  
          const foundProduct = categories.reduce((foundProduct, category) => {
            if (category && category.Products) {
              const productInCategory = category.Products.find(
                (product) => product.product_name === product_name
              );
          
              return foundProduct || productInCategory;
            } else {
              return foundProduct;
            }
          }, null);
  
        if (!foundProduct) {
          throw new Error(`Product with slug ${product_name} not found.`);
        }
  
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [product_name]);
  

  if (!product) {
    return null;
  }

  return (
    <>
      <section id="productDetails">
        <div className="container">
          <PageBreadCrum
            firstLevel={product.category_name}
            secondLevel={product.product_name}
          />
          <div className="product_itemDetails_wrapper">
            <SyncSlider />
            <ProductSummery
              product={product}
              productName={product.option_value_name}
              productCat={product.category_name}
              collection_name={product.collection_name}
              productId={product.product_id}
              productSize={product.size}
              price={product.price}
              discounted_price={product.discounted_price}
              gross_weight={product.gross_weight}
              net_weight={product.net_weight}
              prod_description={product.prod_description}
              carat_price={product.carat_price}
              discount={product.discount}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DataFetch;
