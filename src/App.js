import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/layout";
import Home from "./components/Home/home";
import Menu from "./components/Menu/menu";
import OurStory from "./components/OurStory/ourStory";
import Locations from "./components/Locations/locations";
import Catering from "./components/Catering/catering";
import ScrollTop from "./components/ScrollTop/scrollTop";

const BasicExample = () => (
  <Router>
    <ScrollTop>
      <div>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/catering" element={<Catering />} />
          </Routes>
        </Layout>
      </div>
    </ScrollTop>
  </Router>
);

export default BasicExample;
