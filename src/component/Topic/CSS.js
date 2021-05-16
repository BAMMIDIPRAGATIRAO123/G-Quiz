import { Route, Link, useHistory } from "react-router-dom";
import React from 'react';
import pdf from "../PDF/CSSNotes.pdf";
import Video from '../Videos/CSSVIDEO.mp4';
import CSSQuiz from "../Quiz/CSSQuiz";

const CSS = ()=> {

    return (
        <div className="below2">
            <div className="start2">
                <div className="contain">
                    <h2 className="instruct">CSS STYLING</h2>
                    <h4 className="follow">Let's start with the video.</h4>
                    <div className="hold">
                    <video src={Video} className="videoHolder" controls="controls" autoPlay={true}></video>
                    </div>
                    <div className="links">
                        <h4 className="follow">Click the below links for indepth youtube video tutorials.</h4>
                        <a href="https://youtu.be/3_9znKVNe5g">&emsp; CSS for beginners</a>
                        <br></br>
                        <a href="https://youtu.be/1Rs2ND1ryYc">&emsp; CSS full course</a>
                        <br></br>
                        <a href="https://youtu.be/yfoY53QXEnI">&emsp; CSS crash course</a>
                    </div>
                    <h4 className="follow">You can read the provided material before starting the quiz.</h4>
                    <div className="hold">
                        <button className="thisPdf" onClick={() => window.open(pdf)} target="_blank">CSS Material Pdf</button>
                    </div>
                    <h4 className="follow">Click here to start the quiz</h4>
                    <div className="hold">
                        <Link to="/CSSQuiz">
                            <button className="quiz" variant="outlined" onClick={<CSSQuiz/>}>Let's Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSS;