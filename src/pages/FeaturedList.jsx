import React from "react";
import FeatureCard from "../components/FearturedCard/FeatureCard";

function FeaturedList() {
  return (
    <section id="featured_collection_Section" className="collectionPageListing">
      <div className="container">
        <div className="sectionTitleBox">
          <div className="col-12 col-md-8 col-xl-5">
            <div className="productListTitleWrap">
              <h3>Featured Collection</h3>
              <p>
                Explore our diverse range of collections, each one carefully
                curated to cater to your unique taste and style.
              </p>
            </div>
          </div>
        </div>
        <div className="collections_cardWrapper">
          <FeatureCard />
        </div>
      </div>
    </section>
  );
}

export default FeaturedList;
