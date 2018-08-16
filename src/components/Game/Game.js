import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Middle from "../Middle";
import DispMessage from "../DispMessage";
import ImageCard from "../ImageCard";
import images from "../../imagelist.json";

var prevSelectedImages =[];
var prevSelectedImagesState =[];
var msgText = "";

class Game extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    prevSelectedImagesState
  };

  handleClick = (event) =>{
    let tempImages = [];
    let displayOrder = [];
    let imageSelected = event.target.getAttribute("value");
    let nameSelected = event.target.getAttribute("charName");
    let alreadySelected = false;
    for (let s = 0; s < prevSelectedImages.length; s++){
      if (prevSelectedImages[s] === imageSelected) {
        alreadySelected = true;
      };
    };
    
    // Logic for determining random reshuffle order
    let tempSelectedArray = prevSelectedImages;
    tempSelectedArray[tempSelectedArray.length] = imageSelected;
    let randomNum = Math.floor(Math.random() * 12);
    displayOrder[0] = randomNum;
    randomNum = Math.floor(Math.random() * 12);
    for (var x = 0; x < 11; x++) {
      // loop through random array until you get a number that wasn't already chosen, so there are no duplicates
      for (var i = 0; i < 12; i++) {
        if (displayOrder[i] === randomNum) {
          randomNum = Math.floor(Math.random() * 12);
          // after random number chosen, start over for the next random number
          if (displayOrder.length < 12) {
            i = -1;
          }
          else {
            x = 99;
            i = 99;
          }
        }
      };
      // populate each new display number in array, for new random display order
      displayOrder[displayOrder.length] = randomNum;
    };
    let displayIndex = 0;
    for (var d = 0; d < this.state.images.length; d++){
      displayIndex = displayOrder[d];
      tempImages[d] = this.state.images[displayIndex];
    }
    let newScore = 0;
    let newTopScore = 0;

    // Final logic for either losing the game, or else incrememnting counter
    if (alreadySelected === true) {
      prevSelectedImages = [];
      newScore = 0;
      msgText ="😢 😬 😧 " + nameSelected + " was clicked twice, you lose! ☹️ 😲 😞"
      if (this.state.score > this.state.topScore) {
        newTopScore = this.state.score ;
      }
      else {
        newTopScore = this.state.topScore;
      }
    }
    else {
      newScore = this.state.score + 1;
      newTopScore = this.state.topScore
      msgText = "";
    };

    // if user reaches 12 correct guesses, they win!!!
    if (newScore >= 12) {
      msgText = "😀 😃 😁 CONGRATUATIONS, YOU WIN!!!!! 😁 😃 😀"
      prevSelectedImages = [];
      newTopScore = 12;
      newScore = 0;
    };
    this.setState({ images: tempImages,
                    prevSelectedImagesState: tempSelectedArray,
                    topScore: newTopScore,
                    score: newScore});
    tempImages = [];
  };

  render() {
    return (
      <Wrapper>

        <Title />

        <Middle score={this.state.score} topScore={this.state.topScore} />

        <DispMessage finalMessage={msgText} />

        {this.state.images.map(imageData => (
          <ImageCard 
            src={imageData.image}
            name={imageData.name}
            id={imageData.id}
            key={imageData.id}
            handleClick={this.handleClick}
          />
        )) }

      </Wrapper>

    );
  };
};

export default Game;
