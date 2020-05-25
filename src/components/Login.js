import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export default class Login extends Component {
    responseGoogle = (response) => {
        console.log(response);
    }

    /*
        knote:
            -we are using npm module: react-google-login 
            -We can add/configure other mentioned properties/options as args under GoogleLogin tag
            -change clientId to whatever we generate
            -we can put html inside GoogleLogin as shows below for styling
    */
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    scope={"email"}                    
                >                
                <span> Login with Google</span>
                <button className="btn btn-primary">Login with Google</button>
                </GoogleLogin>
            </div>
        )
    }
}
