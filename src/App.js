import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/layout"
import Home from "./components/Home/home"
import Menu from "./components/Menu/menu"
import OurStory from "./components/OurStory/ourStory"
import Locations from "./components/Locations/locations"
import Catering from "./components/Catering/catering"
import ScrollTop from "./components/ScrollTop/scrollTop"

const BasicExample = () => (
  <Router>
    <ScrollTop>
      <div>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/our-story" component={OurStory} />
          <Route path="/locations" component={Locations} />
          <Route path="/catering" component={Catering} />
        </Layout>
      </div>
    </ScrollTop>
  </Router>
);

export default BasicExample
