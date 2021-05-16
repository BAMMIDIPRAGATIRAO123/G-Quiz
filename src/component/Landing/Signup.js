import firebase from "../../firebaseApp";
import {withRouter} from "react-router";
import React, { useCallback } from "react";

const SignUp = ({ history }) =>{
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, username } = event.target.elements;
        try{
            await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            history.push("/Home");

        } catch (error) {
            alert(error);
        }

        firebase.auth().onAuthStateChanged((user)=>{
            var uid = user.uid;

        firebase.firestore().collection("user").add({
            email: email.value,
            password: password.value,
            name: username.value,
            uid: uid,
        }).then((doc)=>{
            console.log(doc);
        })
        .catch((error) => {
			console.error(error);
        })
        
        firebase
            .database()
            .ref('user')
            .push()
            .set({
            email: email.value,
            password: password.value,
            name: username.value,
            uid: uid,
        }).then((doc)=>{
            console.log(doc);
        })
        .catch((error) => {
			console.error(error);
        })
    });

    }, [history]);


    return(
        <div className="cardHolder2">
            <div className="card2">
                <div className="devImage"></div>
                <h1 className="top">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className="info">
                        <label>
                           <div className="title"> Username &emsp;</div> 
                           <input name="username" type="text" placeholder="Username" />
                        </label>
                        <label>
                           <div className="title"> Email &ensp; &emsp; &emsp;</div> 
                            <input name="email" type="email" placeholder="Email" />
                        </label>
                        <br></br>
                        <label>
                           <div className="title"> Password &emsp;</div> 
                            <input name="password" type="password" placeholder="Password" />
                        </label>
                    </div>
                    <button className="select" type="submit" className="btn-submit" >Sign Up</button>
                </form>
            </div>
        </div>
        
    );
};

export default withRouter(SignUp);