import React from "react";
import { Link } from "react-router-dom";
function PageBreadCrum({firstLevel, secondLevel}) {
  const toCapitalCase = (str) => {
    if (str && typeof str === 'string') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return "";
  };  
  return (
    <div className="continue_shoppingBtnWrap">
      <Link to="/" className="backBtn">
        {"<"} Back
      </Link>
      <span>Home</span>
      <span>/ {firstLevel && toCapitalCase(firstLevel)}</span>
      <span>/ {secondLevel && toCapitalCase(secondLevel)}</span>
    </div>
  );
}

export default PageBreadCrum;
