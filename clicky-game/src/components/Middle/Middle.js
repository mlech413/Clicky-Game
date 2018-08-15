import React from "react";
import "./Middle.css";

const Middle = (props) => (
    <div className="container">
        <div className="row">
                <div className="col-md-6">
                    <div className="middle">
                        <h1>Click an image to begin!</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="score">
                        <h1>Score: {props.score} &nbsp; Top Score: {props.topScore}</h1>
                    </div>
                </div>
        </div>
    </div>
);

export default Middle;
