import { Route, Link, useHistory } from "react-router-dom";
import React from 'react';
import pdf from "../PDF/ReactJSNotes.pdf";
import Video from '../Videos/REACTVIDEO.mp4';
import REACTQuiz from "../Quiz/REACTQuiz";


const REACT = ()=> {

    return (
        <div className="below2">
            <div className="start2">
                <div className="contain">
                    <h2 className="instruct">REACT JS</h2>
                    <h4 className="follow">Let's start with the video.</h4>
                    <div className="hold">
                    <video src={Video} className="videoHolder" controls="controls" autoPlay={true}></video>
                    </div>
                    <div className="links">
                        <h4 className="follow">Click the below links for indepth youtube video tutorials.</h4>
                        <a href="https://youtu.be/Ke90Tje7VS0">&emsp; React Js for beginners</a>
                        <br></br>
                        <a href="https://youtu.be/CI2kX2EFhWc">&emsp; React Js full course</a>
                        <br></br>
                        <a href="https://youtu.be/w7ejDZ8SWv8">&emsp; React Js crash course</a>
                    </div>
                    <h4 className="follow">You can read the provided material before starting the quiz.</h4>
                    <div className="hold">
                        <button className="thisPdf" onClick={() => window.open(pdf)} target="_blank">REACT Material Pdf</button>
                    </div>
                    <h4 className="follow">Click here to start the quiz</h4>
                    <div className="hold">
                        <Link to="/REACTQuiz">
                            <button className="quiz" variant="outlined" onClick={<REACTQuiz/>}>Let's Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default REACT;