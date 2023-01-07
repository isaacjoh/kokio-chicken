import React from "react";
import Paragraph from "../Paragraph/paragraph";
import CateringOption from "../CateringOption/cateringOption";
import "./catering.scss";
import { CATERING_PAGE } from "../../content";

const Catering = () => (
  <div className="box full-page catering-page">
    <div className="box full-page-layout">
      <div className="tint"></div>
      <h1>{CATERING_PAGE.title}</h1>
      <Paragraph>
        {CATERING_PAGE.paragraph1}
      </Paragraph>
      <Paragraph style={{margin: "2px 0 0"}}>
        {CATERING_PAGE.paragraph2}
      </Paragraph>
      <div className="box catering-options-container" direction="row">
        <CateringOption
          size={CATERING_PAGE.small_package.size}
          people={CATERING_PAGE.small_package.people}
          price={CATERING_PAGE.small_package.price}
          items={[
            {
              key: "chicken",
              content: CATERING_PAGE.small_package.chicken
            },
            {
              key: "wings",
              content: CATERING_PAGE.small_package.wings
            },
            {
              key: "drumsticks",
              content: CATERING_PAGE.small_package.drumsticks
            },
            {
              key: "salad",
              content: CATERING_PAGE.small_package.salad
            },
            {
              key: "riceCake",
              content: CATERING_PAGE.small_package.riceCake
            }
          ]}
        />
        <CateringOption
          size={CATERING_PAGE.medium_package.size}
          people={CATERING_PAGE.medium_package.people}
          price={CATERING_PAGE.medium_package.price}
          items={[
            {
              key: "chicken",
              content: CATERING_PAGE.medium_package.chicken
            },
            {
              key: "wings",
              content: CATERING_PAGE.medium_package.wings
            },
            {
              key: "drumsticks",
              content: CATERING_PAGE.medium_package.drumsticks
            },
            {
              key: "salad",
              content: CATERING_PAGE.medium_package.salad
            },
            {
              key: "riceCake",
              content: CATERING_PAGE.medium_package.riceCake
            }
          ]}
        />
        <CateringOption
          size={CATERING_PAGE.large_package.size}
          people={CATERING_PAGE.large_package.people}
          price={CATERING_PAGE.large_package.price}
          items={[
            {
              key: "chicken",
              content: CATERING_PAGE.large_package.chicken
            },
            {
              key: "wings",
              content: CATERING_PAGE.large_package.wings
            },
            {
              key: "drumsticks",
              content: CATERING_PAGE.large_package.drumsticks
            },
            {
              key: "salad",
              content: CATERING_PAGE.large_package.salad
            },
            {
              key: "riceCake",
              content: CATERING_PAGE.large_package.riceCake
            }
          ]}
        />
      </div>
    </div>
  </div>
)

export default Catering
