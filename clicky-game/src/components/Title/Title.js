import React from "react";
import "./Title.css";

// const Title = props => <h3 className="title">{props.children}</h3>;


const Title = (props) => (
    <div className="container">
        <div className="row">
                <div className="col-md-6">
                    <div className="title">
                        <h3>Click an image to begin!</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="score">
                        <h3>Score: {props.score} &nbsp; Top Score: {props.topScore}</h3>
                    </div>
                </div>
        </div>
    </div>
    
);

export default Title;
