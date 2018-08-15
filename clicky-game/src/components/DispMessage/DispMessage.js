import React from "react";
import "./DispMessage.css";

const DispMessage = (props) => (
                    <div className="display-message">
                        <h1><center><strong>{props.finalMessage}</strong></center></h1>
                    </div>
);

export default DispMessage;
