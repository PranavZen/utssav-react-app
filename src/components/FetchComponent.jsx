import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchComponent() {
  const [responseData, setResponseData] = useState(null);

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
        console.log("Responsexxx:", response.data.productCategories[2].Products);
        setResponseData(response.data.productCategories[2].Products);
        // Handle the response data as needed
      } catch (error) {
        console.error("Errorxxx:", error);
        // Handle errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>FetchComponent</h2>
      {responseData && (
        <div>
          {/* Render the data here */}
          {responseData.map((product, index) => (
            <div key={index}>
              <p>Product Name: {product.product_name}</p>
              <p>Product ID: {product.product_id}</p>
              {/* Add more fields as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchComponent;
