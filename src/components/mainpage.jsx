import React, { Component } from "react";
import NavBar from "./navbar";

import "./mainpage.css";
import Slide from "./slideshow/slide";
import FooterPage from "./footer";
import Cards from "./cards/cards";
import MainPageBody from "./main_page_body";
class Mainpage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Slide />
        <br />
        <MainPageBody/>
        <Cards />
        <FooterPage />
      </React.Fragment>
    );
  }
}

export default Mainpage;
