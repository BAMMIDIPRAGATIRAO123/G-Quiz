import React from 'react';
import firebase from '../../firebaseApp';
import { Link } from "react-router-dom";

const Board = ()=> {
    
    const [points, setPoints] = React.useState([])

    React.useEffect(()=>{
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("point").orderBy("points","desc").get()
            setPoints (data.docs.map(doc => doc.data()))
        }
        fetchData()
        
    },[])

    return (
        <div className="below4">
            <div className="start">
                <div className="contain">
                    <h4 className="instruct">LEADERBOARD</h4>
                    <div className="scroll2">
                        <table id="simple-board">
                            <tbody>
                                <tr id="rowhead" className="rowhead">
                                    <th id="cell0-1">User_Id</th>
                                    <th id="cell0-2">Score</th>
                                </tr>
                                {
                                    points.map(point => (
                                        <tr id="row0" key={point.uid}>
                                            <td id="cell0-1">{point.useremail}</td>
                                            <td id="cell0-2">{point.points}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div>
            <Link to={"/Signup"}>
            <button className="signout" onClick={()=> firebase.auth().signOut()}>Sign Out</button>
            </Link>
        </div>
    );
};

export default Board;
