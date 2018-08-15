import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <button className="btn btn-primary" onClick={props.handleClick}>
        <div className="img-container">
            <img alt={props.name} src={props.src} value={props.id}/>
        </div>
    </button>
);

export default ImageCard;
