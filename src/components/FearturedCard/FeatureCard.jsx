import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function FeatureCard() {
  const [data, setData] = useState([]);
  const [isIndus, setPage] = useState(false);
  const [loading, setLoading] = useState(true);
  const locationN = useLocation();

  useEffect(() => {
    const apiUrl =
      "https://root.utssavjewels.com/app/consumer/services_v1/api.php?x=getCollection";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.collection_list);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    if (locationN.pathname === "/get_collection_list") {
      setPage(true);
    } else {
      setPage(false);
    }
  }, [locationN]);

  return (
    <>
      <div className="coleectionWrap">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.slice(0, isIndus ? data.length : 3).map((item, index) => (
              <div className="col-md-4 collection_Card px-3" key={index}>
                <Link to="#">
                  <div className="collectionImgWrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      data-aos="flip-right"
                      data-aos-duration="3000"
                      className="aos-init aos-animate"
                    />
                  </div>
                  <div className="collectionNameWrap">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="view_collectionBtn_wrap">
        {locationN.pathname !== "/get_collection_list" && (
          <div className="collectionViewBtn">
            <Link to="/get_collection_list" className="coll_viewBtn btn">
              View All Collections
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default FeatureCard;
