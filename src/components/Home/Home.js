import {Link} from 'react-router-dom';
import React from 'react';
import firebase from '../../firebaseApp';

const Home = ()=> {

    return (
        <div className="below">
            <div className="start">
                <div className="home">
                    <button className="learn" variant="outlined" >Let's Get Started</button>
                    <div className="topicContainer">
                        <h3 className="instruct">Select Your Topic</h3>
                        <div className="topics">
                            <Link to="/Javascript">
                                <button className="enterTopic" >Javascript</button>
                            </Link>
                            <Link to="/Python">
                                <button className="enterTopic">Python</button>
                            </Link>
                            <Link to="/REACT">
                                <button className="enterTopic" >React</button>
                            </Link>
                            <Link to="/CSS">
                                <button className="enterTopic">CSS</button>
                            </Link>
                            <Link to="/Bootstrap">
                                <button className="enterTopic" >Bootstrap</button>
                            </Link>
                        </div>
                        <h2 className="greet">Happy Learning!!</h2>
                    </div>
                </div>
            </div>
            <button className="signout" onClick={()=> {firebase.auth().signOut()}}>Sign Out</button>
        </div>
    );
};

export default Home;