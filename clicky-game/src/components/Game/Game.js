import React from "react";
import Wrapper from "../Wrapper";
import Title from "../Title";
import Middle from "../Middle";
import ImageCard from "../ImageCard";
import images from "../../imagelist.json";

class Game extends React.Component {
  state = {
    images,
    score: 0,
    topScore: 0
  };

componentDidMount () {
  console.log(this.state.images)
};

handleIncrement = () => {
  this.setState((state)=> {return { score: this.state.score + 1 }
  });
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
      />
    )) }

  </Wrapper>
  
  );
};

};

export default Game;
