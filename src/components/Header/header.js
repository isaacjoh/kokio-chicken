import React from "react";
import Navigation from "../Navigation/navigation"
import "./header.scss";

class Header extends React.Component {
  state = {}

  render() {
    return (
      <div className="header" ref={this.targetRef}>
        <Navigation />
      </div>
    )
  }
}

export default Header
