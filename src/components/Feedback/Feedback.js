import {Link} from "react-router-dom";
import React from 'react';
import FeedBack from 'react-feedback-popup';


const Feedback = ()=> {
    return (
        <div className="belowf">
            <div className="start4">
                <div className="contain">
                    <h2 className="instruct">FEEDBACK !!</h2>
                    <Link to={"/comment"}>
                        <button style={{height:'50px',width:'300px',fontSize:'20px',color:'white',background:'#0000FF',
                    fontWeight:'600',borderRadius:'20px'}} onClick={<comment/>}>COMMENT SECTION</button>
                    </Link>
                    <div className="feedImage"></div>
                    <div className="App">
                        <header className="App-header">
                        </header>
                        <FeedBack className="feed"
                            style={{zIndex:'2', marginLeft:'430px',marginBottom:'-300px', position:'absolute'}}
                            position="left"
                            numberOfStars={5}
                            headerText="Welcome!"
                            bodyText="Leave your feedback here..."
                            buttonText="Feedback"
                            handleClose={() => console.log("handleclose")}
                            handleSubmit={(data) => 
                                fetch('xxxxxx', {
                                    
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    method: 'POST', // or 'PUT'
                                    body: JSON.stringify(data),
                                    
                                }).then((response) => { 
                                    console.log(data);
                                    if (!response.ok) {
                                        return Promise.reject('Thank you for your feedback!!!');
                                    }
                                    response.json()
                                }).then(() => {
                                    alert('Success!');
                                }).catch((error) => {
                                    alert('Thank you for your feedback!!!', error);
                                })
                            }
                            handleButtonClick={() => console.log("handleButtonClick")}
                        />
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="tagHolder">
                <i><h2 className="tag">Online learning is not the next big thing, it is the now big thing.</h2></i>
                <h4 className="quote">One of the most important areas we can develop as professionals is competence in accessing and sharing knowledge.</h4>
                <i><h2 className="tag">"We bring learning to people instead of people to learning."</h2>
                </i>
            </div>
        </div>
    );
};

export default Feedback;