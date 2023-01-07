import React from "react";
import './cateringOption.scss';

const CateringOption = (props) => (
  <div className="box catering-option">
    <p className="catering-option-header" size="xlarge">
      {props.size} {props.people}
    </p>
    {
      props.items.map(item => (
        <p
          className="catering-option-item"
          key={item.key}
        >
          {item.content}
        </p>
      ))
    }
    <p className="catering-option-price" size="large">{props.price}</p>
  </div>
)

export default CateringOption
