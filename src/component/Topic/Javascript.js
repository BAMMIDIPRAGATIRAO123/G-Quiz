import { Route, Link, useHistory } from "react-router-dom";
import React from 'react';
import JSQuiz from "../Quiz/JSQuiz";
import pdf from "../PDF/JavaScriptNotes.pdf";
import Video from '../Videos/JSVIDEO.mp4';

const Javascript = ()=> {

    return (
        <div className="below2">
            <div className="start2">
                <div className="contain">
                    <h2 className="instruct">JAVASCRIPT</h2>
                    <h4 className="follow">Let's start with simple video lecture.</h4>
                    <div className="hold">
                        <video src={Video} className="videoHolder" controls="controls" autoPlay={true}></video>
                    </div>
                    <div className="links">
                        <h4 className="follow">Click the below links for indepth youtube video tutorials.</h4>
                        <a href="https://youtu.be/PkZNo7MFNFg">&emsp; Javascript for beginners</a>
                        <br></br>
                        <a href="https://youtu.be/o1IaduQICO0">&emsp; Javascript full course</a>
                        <br></br>
                        <a href="https://youtu.be/hdI2bqOjy3c">&emsp; Javascript crash course</a>
                    </div>
                    <h4 className="follow">You can read the provided material before starting the quiz.</h4>
                    <div className="hold">
                        <button className="thisPdf" onClick={() => window.open(pdf)} target="_blank">Javascript Material Pdf</button>
                    </div>
                    <h4 className="follow">Click here to start the quiz</h4>
                    <div className="hold">
                        <Link to="/JSQuiz">
                            <button className="quiz" variant="outlined" onClick={<JSQuiz/>}>Let's Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Javascript;