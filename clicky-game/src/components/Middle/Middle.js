import React from "react";
import "./Middle.css";

const Middle = (props) => (
    <div className="container">
        <div className="row">
                <div className="col-md-6">
                    <div className="middle">
                        <h2>Click an image to begin!</h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="score">
                        <h2>Score: {props.score} &nbsp; Top Score: {props.topScore}</h2>
                    </div>
                </div>
        </div>
    </div>
);

export default Middle;
