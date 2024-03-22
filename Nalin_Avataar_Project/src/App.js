import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class App extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "400px",
      width: "400px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "30px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />

          <div className="pages">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>

        <div style={App.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            <div style={App.CARD_STYLE}>First Card</div>
            <div style={App.CARD_STYLE}>Second Card</div>
            <div style={App.CARD_STYLE}>Third Card</div>
            <div style={App.CARD_STYLE}>Fourth Card</div>
            <div style={App.CARD_STYLE}>Fifth Card</div>
          </ReactCardCarousel>
        </div>
      </>
    );
  }
}

export default App;
