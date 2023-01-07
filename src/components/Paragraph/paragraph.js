import React from "react";
import "./paragraph.scss";

const CustomParagraph = (props) => (
  <p className="paragraph" {...props}>
    {props.children}
  </p>
)

export default CustomParagraph
