import firebase from "../../firebaseApp";
import React, {useContext,useCallback} from "react";
import {withRouter, Redirect} from "react-router";
import {AuthContext} from "../../Auth";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try{
                await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
                history.push("/Home");

            }catch(error) {
                alert(error);
            }
        },
        [history],
    );

    const {currentUser} = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/Home" />;
    }

    return(
        <div className="cardHolder">
            <div className="card">
                <div className="devImage"></div>
                <h1 className="top">Log In</h1>
                <form onSubmit={handleLogin}>
                    <div className="info">
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
                    <button className="select" type="submit" className="btn-submit" >Log In</button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);