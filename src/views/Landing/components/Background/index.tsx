import React from "react";
import "./background.scss";
// import BlobsTop from "../../../../assets/icons/landing-blobs-top.png";

function Background() {
    return (
        <div className="landing-background">
            <div className="landing-background-blobs-top">
                <video autoPlay loop id="myVideo">
                    <source  src="background.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Background;