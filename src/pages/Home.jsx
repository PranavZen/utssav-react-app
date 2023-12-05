import React from "react";

import HomeBannerSlider from "../components/Slider/HomeBannerSlider";
import CategoryCardSlider from "../components/Slider/CategoryCardSlider";
import FeatureCard from "../components/FearturedCard/FeatureCard";
import { Link } from "react-router-dom";
import ChooseUsBox from "../components/ChooseUs/ChooseUsBox";
import ChooseUsBoxSlider from "../components/Slider/ChooseUsBoxSlider";

function Home() {
  return (
    <>
      <section id="header_banner_Section">
        <HomeBannerSlider />
      </section>
      <section id="product_Card_Wrapper">
        <div className="container-fluid px-5">
          <div className="sectionTitleBox">
            <div className="col-12 col-md-8 col-xl-5">
              <div className="productListTitleWrap">
                <h3>Product Categories</h3>
                <p>
                  Discover our wide range of unique and stylish products across
                  various categories that cater to your individual taste and
                  preferences.
                </p>
              </div>
            </div>
          </div>
          <CategoryCardSlider />
        </div>
      </section>
      <section id="featured_collection_Section">
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
      <section id="explore_Section">
        <div className="container-fluid px-0">
          <div className="explore_overText_wrap">
            <div className="textWrap">
              <h2>Shop for your Loved one</h2>
              <p>Unlock those precious moments with your loved ones,</p>
              <p>
                with a gold design that’s every day, lightweight and right
                on-trend.
              </p>
            </div>
            <div className="exploreBtnWrap">
              <Link to="" className="exploreBtn btn">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="choose_us_section">
        <div className="container">
          <div className="sectionTitleBox">
            <div className="col-12 col-md-8 col-xl-5">
              <div className="productListTitleWrap">
                <h3>Why you should choose us</h3>
              </div>
            </div>
          </div>
          <div className="choose_opt_wrapper">
            <div className="col-md-10 outerColumn">
              <div className="innerRowWrap">
                <ChooseUsBox gridClass="grid1 aos-init aos-animate" />
                <ChooseUsBox gridClass="grid2 aos-init aos-animate" />
                <ChooseUsBox gridClass="grid3 aos-init aos-animate" />
                <ChooseUsBox gridClass="grid4 aos-init aos-animate" />
                <ChooseUsBox gridClass="grid5 aos-init aos-animate" />
              </div>
            </div>
          </div>
          <div id="choose_optSlider">
            <ChooseUsBoxSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
