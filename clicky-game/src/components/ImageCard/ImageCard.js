import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card" onClick={this.handleIncrement}>
        <div className="img-container">
            <img alt={props.name} src={props.src} value={props.id}/>
        </div>
    </div>
);

export default ImageCard;
