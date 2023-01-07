import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'

import "./home.scss"
import { MAIN_PAGE } from "../../content";

const values = [
  { text: 'MENU', value: 25, link: '/menu', img: 'img/menu-mini-page-img.jpg' },
  { text: 'LOCATIONS', value: 25, link: '/locations', img: 'img/locations-mini-page-img.jpg' },
  { text: 'OUR STORY', value: 25, link: '/our-story', img: 'img/our-story-mini-page-img.jpg' },
  { text: 'CATERING', value: 25, link: '/catering', img: 'img/catering-mini-page-img.jpg' }
]

const scrollToNode = id => {
  const element = document.getElementById(id);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  onReady = event => {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1500)
  }

  render() {
    return (
      <div className="box full-page home-page">
        {
          this.state.loading && (
            <div className="loading-section">
              <img className="loading-indicator animated bounce" src="img/kokio-chicken-logo.png" alt="Loading..." />
            </div>
          )
        }
        <div className="home-page-splash">
          <div className="video-background">
            <ReactPlayer url='https://www.youtube.com/watch?v=wHr22GK546A' playing muted loop controls={false} onReady={this.onReady} config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  playsinline: 1
                }
              }
            }} />
          </div>
          <div className="tint main-tint"></div>
          <div className="home-page-content">
            <h1 className="header-text">ME WANT<br />SOME CHICKEN</h1>
            <button className="order-online-btn">
              <Link to="/locations">
                {MAIN_PAGE.orderOnlineButton}
              </Link>
            </button>
            {/* <div className="home-page-attention">
              <h2 className="attention-text">Introducing our<br />Honey Bee chicken wings.<br />Succulent, fresh, and dangerously delicious.</h2>
            </div> */}
          </div>
          <span className="down-arrow bounce" onClick={() => scrollToNode("home-page-id")}>
            <img src="img/down-arrow.png" alt="down" />
          </span>
        </div>
        <div id="home-page-id" className="box home-page">
          <div className="mini-pages-container">
            <div className="mini-pages-layout">
              {values.map(value => (
                <Link to={value.link} key={value.text}>
                  <div className="box mini-page">
                    <div className="tint"></div>
                    <img src={value.img} alt="menu-page-img" />
                    <button className="mini-page-label">
                      <span>{value.text}</span>
                      <img src="img/right-arrow.png" alt="arrow" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
