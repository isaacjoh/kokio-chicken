import React from "react";
import LazyLoad from 'react-lazyload';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import "./menu.scss";
import { MENU_PAGE } from "../../content";

const images = [
  'img/food-img-14.JPG',
  'img/food-img-13.JPG',
  'img/food-img-6.JPG',
  'img/food-img-9.JPG',
  'img/food-img-7.JPG',
  'img/food-img-8.JPG',
  'img/food-img-10.JPG',
  'img/food-img-11.JPG',
  'img/food-img-12.JPG',
  'img/food-img-5.JPG',
  'img/food-img-3.JPG',
  'img/menu-img-1.jpg'
]

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <div className="box full-page inverted">
        <div className="box full-page-layout menu-page">
          <div className="box menu-header">
            <h1>MENU</h1>
          </div>
          <div className="menu-imgs">
            <div className="food-imgs">
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-14.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                  <span>ORIGINAL CHICKEN</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-13.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
                  <span>HONEY BEE WINGS</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-6.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                  <span>GARLIC WINGS</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-9.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
                  <span>ORANGE CHICKEN WINGS</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-7.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                  <span>HALF AND HALF</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-8.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
                  <span>HONEY RICE CAKE W/ CHICKEN</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-10.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} />
                  <span>SPICY CHICKEN BOWL</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-11.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} />
                  <span>SPICY RICE CAKE</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-12.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 8 })} />
                  <span>COMBINATION PLATE</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-5.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 9 })} />
                  <span>CHICKEN TENDERS</span>
                </div>
              </LazyLoad>
              <LazyLoad>
                <div className="food-img-container">
                  <img src="img/food-img-3.JPG" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 10 })} />
                  <span>WAFFLE FRIES</span>
                </div>
              </LazyLoad>
            </div>
            <p className="menu-vary">
              {MENU_PAGE.header}
            </p>
            <img src="img/menu-img-1.jpg" alt="menu-img1" onClick={() => this.setState({ isOpen: true, photoIndex: 11 })} />
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
