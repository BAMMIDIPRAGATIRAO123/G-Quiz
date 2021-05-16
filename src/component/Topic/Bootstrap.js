import { Route, Link, useHistory } from "react-router-dom";
import React from 'react';
import BootstrapQuiz from "../Quiz/BootstrapQuiz";
import pdf from "../PDF/BootstrapNotes.pdf";
import Video from '../Videos/BOOTSTRAPVIDEO.mp4';

const Bootstrap = ()=> {

    return (
        <div className="below2">
            <div className="start2">
                <div className="contain">
                    <h2 className="instruct">BOOTSTRAP</h2>
                    <h4 className="follow">Let's start with the video.</h4>
                    <div className="hold">
                        <video src={Video} className="videoHolder" controls="controls" autoPlay={true}></video>
                    </div>
                    <div className="links">
                        <h4 className="follow">Click the below links for indepth youtube video tutorials.</h4>
                        <a href="https://youtu.be/0tv85fkdV14">&emsp; Bootstrap for beginners</a>
                        <br></br>
                        <a href="https://youtu.be/Uhy3gtZoeOM">&emsp; Bootstrap full course</a>
                        <br></br>
                        <a href="https://youtu.be/c9B4TPnak1A">&emsp; Bootstrap crash course</a>
                    </div>
                    <h4 className="follow">You can read the provided material before starting the quiz.</h4>
                    <div className="hold">
                        <button className="thisPdf" onClick={() => window.open(pdf)} target="_blank">Bootstrap Material Pdf</button>
                    </div>
                    <h4 className="follow">Click here to start the quiz</h4>
                    <div className="hold">
                        <Link to="/BootstrapQuiz">
                            <button className="quiz" variant="outlined" onClick={<BootstrapQuiz/>}>Let's Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bootstrap;