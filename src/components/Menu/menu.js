import React from "react";
import LazyLoad from "react-lazyload";
import "./menu.scss";
import { MENU_PAGE } from "../../content";

class Menu extends React.Component {
  render() {
    return (
      <div className="box full-page inverted">
        <div className="box full-page-layout menu-page">
          <div className="box menu-header">
            <h1>MENU</h1>
          </div>
          <div className="menu-imgs">
            <div className="food-imgs">
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-14.JPG" alt="food-img" />
                  <span>ORIGINAL CHICKEN</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-13.JPG" alt="food-img" />
                  <span>HONEY BEE WINGS</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-6.JPG" alt="food-img" />
                  <span>GARLIC WINGS</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-9.JPG" alt="food-img" />
                  <span>ORANGE CHICKEN WINGS</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-7.JPG" alt="food-img" />
                  <span>HALF AND HALF</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-8.JPG" alt="food-img" />
                  <span>HONEY RICE CAKE W/ CHICKEN</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-10.JPG" alt="food-img" />
                  <span>SPICY CHICKEN BOWL</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-11.JPG" alt="food-img" />
                  <span>SPICY RICE CAKE</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-12.JPG" alt="food-img" />
                  <span>COMBINATION PLATE</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-5.JPG" alt="food-img" />
                  <span>CHICKEN TENDERS</span>
                </LazyLoad>
              </div>
              <div className="food-img-container">
                <LazyLoad>
                  <img src="img/food-img-3.JPG" alt="food-img" />
                  <span>WAFFLE FRIES</span>
                </LazyLoad>
              </div>
            </div>
            <p className="menu-vary">{MENU_PAGE.header}</p>
            <img src="img/menu-img-1.jpg" alt="menu-img1" />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
