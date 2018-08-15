import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Middle from "../Middle";
import ImageCard from "../ImageCard";
import images from "../../imagelist.json";

var displayOrder=[];

class Game extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    console.log(this.state.images)
  };

  handleIncrement = () => {
    console.log("handleIncrement")
    this.setState( { score: this.state.score + 1 } )
  };

  

  handleClick = (event) =>{
    console.log("handleClick");
    let imageSelected = event.target.getAttribute("value");
    console.log("imageSelected=" + imageSelected);
    let randomNum = Math.floor(Math.random() * 12) + 1;
    displayOrder[0] = randomNum;
    randomNum = Math.floor(Math.random() * 12) + 1;
    for (var x = 0; x < 12; i++) {
      for (var i = 0; i < displayOrder.length; i++) {
        if (displayOrder[i] === randomNum) {
          randomNum = Math.floor(Math.random() * 12) + 1;
          console.log(randomNum);
          i = -1;
        }
      };
      displayOrder[displayOrder.length] = randomNum;
      console.log("displayOrder=" + displayOrder);
    };
  };

  saveTopScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState((state)=> {return { topScore: this.state.score }
      });
    };
  };

  render() {
    return (
      <Wrapper>

        <Title score={this.state.score} topScore={this.state.topScore} />

        <Middle />

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
