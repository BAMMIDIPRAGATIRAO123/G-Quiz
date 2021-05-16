
import { Link } from "react-router-dom";
import React from 'react';

const Header = ()=> {
    return (
        <div className="AppBody">
            <div className="header">
                <div className="g">
                    <div className="gLogo"></div>
                    <div className="name">G-QUIZ</div>
                </div>
                <div className="program">
                <Link to={"/board"}>
                    <button className="board" onClick={<board/>}>Leaderboard</button>
                </Link>
                </div>
                <div className="bottomHead">
                    <div className="Buttons">
                        <span>
                            <Link to={"/Signup"}>
                                <button className="btn-signup" variant="outlined">Sign Up</button>
                            </Link>
                        </span>
                        <span>
                            <Link to={"/Login"}>
                                <button className="btn-login" variant="outlined">Log In</button>
                            </Link>
                        </span>
                        <span>
                            <Link to={"/About"}>
                                <button className="btn-login" variant="outlined">About Us</button>
                            </Link>
                        </span>
                        <span>
                            <Link to={"/Feedback"}>
                                <button className="btn-login" variant="outlined">Feedback</button>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;