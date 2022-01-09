import React from "react";
import "./background.scss";
import  "./background.mp4";

function Background() {
    return (
        <div className="landing-background">
         <video autoPlay loop id="myVideo">
            <source  src="background.mp4" type="video/mp4" />
        </video>
        
        </div>
    );
}

export default Background;