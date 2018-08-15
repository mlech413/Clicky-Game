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
    console.log(this.state)
  };

  handleIncrement = () => {
    console.log("handleIncrement")
    this.setState( { score: this.state.score + 1 } )
  };

  

  handleClick = (event) =>{
    let tempImages = [];
    // let tempImages = this.state.images;
    console.log("start this.state.images=")
    console.log(this.state.images);
    console.log("start tempImages=")
    console.log(tempImages);
    let imageSelected = event.target.getAttribute("value");
    console.log("imageSelected=" + imageSelected);
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
    // for (var d = 0; d < tempImages.length; d++){
      displayIndex = displayOrder[d];
      console.log("displayIndex=" + displayIndex);
      console.log("this.state.images[displayIndex][" + displayIndex + "]=");
      console.log(this.state.images[displayIndex]);
      tempImages[d] = this.state.images[displayIndex];
      // this.setState({this.state.images[displayIndex]: tempImages[d]});
      console.log("tempImages[" + d + "] = images[" + displayIndex + "]"  );

    }
    this.setState({images: tempImages});
    tempImages = [];
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

        <Title />

        <Middle score={this.state.score} topScore={this.state.topScore} />

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
