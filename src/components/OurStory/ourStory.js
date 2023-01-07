import React from "react";
import LazyLoad from 'react-lazyload';
import Lightbox from 'lightbox-react';
import Paragraph from "../Paragraph/paragraph"
import "./ourStory.scss";
import { OUR_STORY_PAGE } from "../../content";

const images = [
  'img/food-img-1.jpg',
  'img/our-story-img-2.jpg',
  'img/our-story-img-3.jpg',
  'img/our-story-img-4.jpg',
  'img/our-story-img-7.jpg',
  'img/our-story-img-6.jpg',
  'img/our-story-img-10.jpg',
  'img/our-story-img-8.jpg',
  'img/our-story-img-1.jpg',
  'img/our-story-img-11.jpg',
  'img/our-story-img-5.jpg',
  'img/our-story-img-9.jpg'
]

const getBrowserWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

class OurStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      browserWidth: undefined
    };
  }

  componentDidMount = () => {
    this.setState({
      browserWidth: getBrowserWidth()
    })
  }

  render() {
    const { photoIndex, isOpen, browserWidth } = this.state;

    return (
      <div className="box full-page">
        <div className="box full-page-container our-story-page">
          <div className="box full-page-layout">
            {
              (browserWidth && browserWidth >= 768 && browserWidth < 825) ? (
                <h1>{OUR_STORY_PAGE.title1} {OUR_STORY_PAGE.title2}</h1>
              ) : (<React.Fragment><h1>{OUR_STORY_PAGE.title1}</h1><h1>{OUR_STORY_PAGE.title2}</h1></React.Fragment>)
            }
            <Paragraph>
              {OUR_STORY_PAGE.paragraph1}
            </Paragraph>
            <div className="column">
              <LazyLoad>
                <img src="img/food-img-1.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
                <img src="img/our-story-img-2.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })} />
              </LazyLoad>
            </div>
            <Paragraph className="paragraph middle-paragraph">
              {OUR_STORY_PAGE.paragraph2}
            </Paragraph>
            <div className="column">
              <LazyLoad>
                <img src="img/our-story-img-3.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 2 })} />
                <img src="img/our-story-img-4.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 3 })} />
              </LazyLoad>
              <LazyLoad>
                <img src="img/our-story-img-7.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 4 })} />
                <img src="img/our-story-img-6.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 5 })} />
              </LazyLoad>
              <LazyLoad>
                <img src="img/our-story-img-10.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 6 })} />
                <img src="img/our-story-img-8.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 7 })} />
              </LazyLoad>
              <LazyLoad>
                <img src="img/our-story-img-1.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 8 })} />
                <img src="img/our-story-img-11.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 9 })} />
              </LazyLoad>
            </div>
            <Paragraph>
              {OUR_STORY_PAGE.paragraph3}
            </Paragraph>
            <div className="column">
              <LazyLoad>
                <img src="img/our-story-img-5.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 10 })} />
                <img src="img/our-story-img-9.jpg" alt="food-img" onClick={() => this.setState({ isOpen: true, photoIndex: 11 })} />
              </LazyLoad>
            </div>

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

export default OurStory
