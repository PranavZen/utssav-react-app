import React, { useEffect, useState } from "react";
import PageBreadCrum from "../components/Breadcrum/PageBreadCrum";
import ProductSummery from "../components/ProductsDetailsBox/ProductSummery";
import SyncSlider from "../components/Slider/SyncSlider";
import { useParams } from "react-router-dom";
import axios from "axios";
import DataFetch from "./DataFetch";

function ProductDetails() {
  const params = useParams();
  const { category_name, proName } = params;
  const [responseData, setResponseData] = useState([]);
  console.log(responseData);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://root.utssavjewels.com/app/consumer/services_v1/product_categories_banner";
      const data = {
        city_id: 69,
        token: 3,
        next_id: 0,
      };

      try {
        const response = await axios.post(url, data);

        let updatedCategoryName = category_name;

        if (category_name === "chain-set") {
          updatedCategoryName = "Chain Set";

          var category = response.data.productCategories.find(
            (categoryData) => categoryData.name === updatedCategoryName
          );
        } else {
          category = response.data.productCategories.find(
            (categoryData) =>
              categoryData.name.toLowerCase() === category_name.toLowerCase()
          );
        }

        if (category) {
          // Filter products based on both category_name and proName
          let filteredProducts = category.Products.filter(
            (product) => product.proName === proName
          );

          if (filteredProducts.length > 0) {
            setResponseData(filteredProducts);
          } else {
            console.error(
              `Error: No products found with the name ${proName} in the category ${category_name}`
            );
          }

          const optionValueIds = filteredProducts.map((product) => product.option_value_id);

          const secondUrl = 'https://root.utssavjewels.com/app/consumer/services_v1/product_details';

          // try {
          //   const secondResponse = await axios.post(secondUrl, {option_value_id: optionValueIds});
          //   // Process the data from the second API call as needed
          //   console.log('Second API Response:', secondResponse.data);
          // } catch (error) {
          //   console.error('Error fetching data from the second API:', error);
          // }

          // Make separate requests for each option_value_id
          const apiRequests = optionValueIds.map(async (optionValueId) => {
            try {
              const secondResponse = await axios.post(secondUrl, { option_value_id: optionValueId });
              return { option_value_id: optionValueId, data: secondResponse.data };
            } catch (error) {
              console.error(`Error for option_value_id ${optionValueId}:`, error);
              return { option_value_id: optionValueId, error: error.message };
            }
          });

          // Execute all requests concurrently
          const allResponses = await Promise.all(apiRequests);

          console.log('All Responses:', allResponses);
        } else {
          console.error(
            `Error: No category found with the name ${category_name}`
          );
        }
      } catch (error) {
        console.error("Errorxxx:", error);
      }
    };

    fetchData();
  }, [category_name, proName]);

  if (responseData.length === 0) {
    // You can render a loading state here if needed
    return null;
  }

  return (
    <section id="productDetails">
      <div className="container">
        {responseData.map((product, index) => (
          <PageBreadCrum
            key={index}
            firstLevel={product.category_name}
            secondLevel={product.product_name}
          />
        ))}
        {/* <DataFetch/> */}
        <div className="product_itemDetails_wrapper">
          <SyncSlider />

          {responseData.map((product, index) => (
            <ProductSummery
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
