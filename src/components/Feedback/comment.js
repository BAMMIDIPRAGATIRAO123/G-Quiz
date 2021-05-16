import React,{useState} from 'react';
import firebase from "../../firebaseApp";

const Comment = () =>{
    const [comment,setComment] =useState("");
    const [suggestion,setSuggestion] =useState("");

    firebase.firestore().collection("comment").add({
        comment: comment,
        suggestion: suggestion,
    })
    return (
        <div className="below">
            <div className="start">
                <div className="contain">
                <h2 className="instruct">comment</h2>
                <div>
                    <form>
                    <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        <label>
                            Leave ur comment here...
                            <br></br>
                            <br></br>
                            <textarea type="text" value={comment} onChange={(e)=> setComment(e.target.value)}></textarea>
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                            <br></br>
                        <label>
                            Any suggestions?
                            <br></br>
                            <br></br>
                            <textarea type="text" value={suggestion} onChange={(e) => setSuggestion(e.target.value)}></textarea>
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                    <div className="commentImage">
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Comment;
