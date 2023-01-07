import React from "react";
import LazyLoad from "react-lazyload";
import Paragraph from "../Paragraph/paragraph";
import "./ourStory.scss";
import { OUR_STORY_PAGE } from "../../content";

const getBrowserWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

class OurStory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      browserWidth: undefined,
    };
  }

  componentDidMount = () => {
    this.setState({
      browserWidth: getBrowserWidth(),
    });
  };

  render() {
    const { browserWidth } = this.state;

    return (
      <div className="box full-page">
        <div className="box full-page-container our-story-page">
          <div className="box full-page-layout">
            {browserWidth && browserWidth >= 768 && browserWidth < 825 ? (
              <h1>
                {OUR_STORY_PAGE.title1} {OUR_STORY_PAGE.title2}
              </h1>
            ) : (
              <React.Fragment>
                <h1>{OUR_STORY_PAGE.title1}</h1>
                <h1>{OUR_STORY_PAGE.title2}</h1>
              </React.Fragment>
            )}
            <Paragraph>{OUR_STORY_PAGE.paragraph1}</Paragraph>
            <div className="column">
              <LazyLoad>
                <img src="img/food-img-1.jpg" alt="food-img" />
                <img src="img/our-story-img-2.jpg" alt="food-img" />
              </LazyLoad>
            </div>
            <Paragraph className="paragraph middle-paragraph">
              {OUR_STORY_PAGE.paragraph2}
            </Paragraph>
            <div className="column">
              <LazyLoad>
                <img src="img/our-story-img-3.jpg" alt="food-img" />
                <img src="img/our-story-img-4.jpg" alt="food-img" />
              </LazyLoad>
              <LazyLoad>
                <img src="img/our-story-img-7.jpg" alt="food-img" />
                <img src="img/our-story-img-6.jpg" alt="food-img" />
              </LazyLoad>
              <LazyLoad>
                <img src="img/our-story-img-10.jpg" alt="food-img" />
                <img src="img/our-story-img-8.jpg" alt="food-img" />
              </LazyLoad>
              <LazyLoad>
                <img src="img/our-story-img-1.jpg" alt="food-img" />
                <img src="img/our-story-img-11.jpg" alt="food-img" />
              </LazyLoad>
            </div>
            <Paragraph>{OUR_STORY_PAGE.paragraph3}</Paragraph>
            <div className="column">
              <LazyLoad>
                <img src="img/our-story-img-5.jpg" alt="food-img" />
                <img src="img/our-story-img-9.jpg" alt="food-img" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurStory;
