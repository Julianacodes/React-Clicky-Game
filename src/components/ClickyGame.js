import React, { Component } from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";
import Banner from "./Banner";
import images from "../images.json";

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,
    images: images,

    navMessage: "Click a Star Wars image to begin!",
  };

  clickEvent = (clickId) => {
    const newImages = images.map((image) => {
      if (image.id === clickId) {
        if (image.clicked) {
          this.setState({ score: 0 });
        } else {
          this.setState({ score: this.state.score + 1 });
          if (this.state.score >= this.state.highScore) {
            this.setState({ highScore: this.state.highScore + 1 });
          }
          image.clicked = true;
        }
      }

      return image;
    });
    let RandomImage;
    if (this.state.score === 0) {
      RandomImage = images;
    } else {
      RandomImage = newImages;
    }
    RandomImage = RandomImage.sort(() => {
      return Math.random() - 0.5;
    });
    this.setState({ images: RandomImage });
  };

  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Banner />
        <Container
          characters={state.images}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default ClickyGame;
