import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Middle from "../Middle";
import DispMessage from "../DispMessage";
import ImageCard from "../ImageCard";
import images from "../../imagelist.json";

var prevSelectedImages =[];
var prevSelectedImagesState =[];
var msgText = "testing";

class Game extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    prevSelectedImagesState
  };

  // componentDidMount() {
  //   console.log(this.state)
  // };

  handleIncrement = () => {
    console.log("handleIncrement")
    this.setState( { score: this.state.score + 1 } )
  };

  

  handleClick = (event) =>{
    let tempImages = [];
    let displayOrder = [];
    // let tempImages = this.state.images;
    console.log("start this.state.images=")
    console.log(this.state.images);
    console.log("start tempImages=")
    console.log(tempImages);
    let imageSelected = event.target.getAttribute("value");
    let nameSelected = event.target.getAttribute("name");
    console.log("imageSelected=" + imageSelected);
    let alreadySelected = false;
    for (let s = 0; s < prevSelectedImages.length; s++){
      if (prevSelectedImages[s] === imageSelected) {
        alreadySelected = true;
        console.log("alreadySelected = true");
      }
      else {
        console.log("alreadySelected = false");
      }
    };
    let tempSelectedArray = prevSelectedImages;
    tempSelectedArray[tempSelectedArray.length] = imageSelected;
    let randomNum = Math.floor(Math.random() * 12);
    displayOrder[0] = randomNum;
    randomNum = Math.floor(Math.random() * 12);
    for (var x = 0; x < 11; x++) {
      for (var i = 0; i < 12; i++) {
        if (displayOrder[i] === randomNum) {
          randomNum = Math.floor(Math.random() * 12);
          if (displayOrder.length < 12) {
            i = -1;
          }
          else {
            x = 99;
            i = 99;
          }
        }
      };
      displayOrder[displayOrder.length] = randomNum;
    };
    console.log("displayOrder=" + displayOrder);
    let displayIndex = 0;
    for (var d = 0; d < this.state.images.length; d++){
      displayIndex = displayOrder[d];
      tempImages[d] = this.state.images[displayIndex];
    }
    let newScore = 0;
    let newTopScore = 0;
    let msgText = "";
    if (alreadySelected === true) {
      prevSelectedImages = [];
      newScore = 0;
      msgText = nameSelected + " was clicked twice!"
      if (this.state.score > this.state.topScore) {
        newTopScore = this.state.score ;
      }
      else {
        newTopScore = this.state.topScore;
      }
    }
    else {
      newScore = this.state.score + 1;
      msgText = "";
    }

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

        <DispMessage msgText />

        {this.state.images.map(imageData => (
          <ImageCard 
            src={imageData.image}
            alt={imageData.name}
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
