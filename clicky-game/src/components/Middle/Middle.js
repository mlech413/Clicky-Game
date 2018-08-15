import React from "react";
import "./Middle.css";

const Middle = (props) => (
    <div className="container">
        <div className="row">
                <div className="col-md-6">
                    <div className="middle">
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

export default Middle;
