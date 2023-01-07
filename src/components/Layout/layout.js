import React from "react";
import Header from "../Header/header"
import Footer from "../Footer/footer"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
