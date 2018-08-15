import React from "react";
import "./Title.css";

// const Title = props => <h3 className="title">{props.children}</h3>;


const Title = () => (
    <div className="title">
        <h1><strong>The Simpsons</strong></h1>
        <h3><i>Click on an image to earn points, but don't click on any more than once!</i></h3> 
    </div>
);

export default Title;
