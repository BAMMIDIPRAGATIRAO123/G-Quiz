import { Route, Link, useHistory } from "react-router-dom";
import React from 'react';
import PythonQuiz from "../Quiz/PythonQuiz";
import pdf from "../PDF/PythonNotes.pdf";
import Video from '../Videos/PYTHONVIDEO.mp4';

const Python = ()=> {

    return (
        <div className="below2">
            <div className="start2">
                <div className="contain">
                    <h2 className="instruct">PYTHON 3</h2>
                    <h4 className="follow">Let's start with the video.</h4>
                    <div className="hold">
                        <video src={Video} className="videoHolder" controls="controls" autoPlay={true}></video>
                    </div>
                    <div className="links">
                        <h4 className="follow">Click the below links for indepth youtube video tutorials.</h4>
                        <a href="https://youtu.be/rfscVS0vtbw">&emsp; Python for beginners</a>
                        <br></br>
                        <a href="https://youtu.be/_uQrJ0TkZlc">&emsp; Python full course</a>
                        <br></br>
                        <a href="https://youtu.be/JJmcL1N2KQs">&emsp; Python crash course</a>
                    </div>
                    <h4 className="follow">You can read the provided material before starting the quiz.</h4>
                    <div className="hold">
                        <button className="thisPdf" onClick={() => window.open(pdf)} target="_blank">Python Material Pdf</button>
                    </div>
                    <h4 className="follow">Click here to start the quiz</h4>
                    <div className="hold">
                        <Link to="/PythonQuiz">
                            <button className="quiz" variant="outlined" onClick={<PythonQuiz/>}>Let's Start Quiz</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Python;