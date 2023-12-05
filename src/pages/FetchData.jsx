import React, { useEffect} from 'react';

const YourComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://root.utssavjewels.com/app/consumer/services_v1/product_categories_banner";
      const data = {
        city_id: 69,
        token: 3,
        next_id: 0,
      };

      
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
      <h1>Dtat</h1>
    </div>
  );
};

export default YourComponent;
