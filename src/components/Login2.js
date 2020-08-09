import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { Redirect } from 'react-router-dom'

class Login2 extends Component {
    /*
    render only if not authenticated
    */
    onFormSubmit = (event) => {
        //update state/reducer?
        console.log("signing in");
        this.props.signIn("userid");
    }

    /*
        knote:
            -we are using npm module: react-google-login 
            -We can add/configure other mentioned properties/options as args under GoogleLogin tag
            -change clientId to whatever we generate
            -we can put html inside GoogleLogin as shows below for styling
    */
    render() {
        
        if(!this.props.isSignedIn) {
            return (
                <div>           
                    <button className="btn btn-primary" onClick={this.onFormSubmit}>Login</button>             
                </div>
            )
        }  else {
            //return ( <div></div>)
            return ( <Redirect to={{ pathname: '/' }} />)
        }
        
       /*
       return (
        <div>           
            <button className="btn btn-primary" onClick={this.onFormSubmit}>Login</button>             
        </div>
        )
        */
    }
}

const mapStateToProps = state => {
    return {
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
    };
  };
  
export default connect(
    mapStateToProps,
    { signIn }
)(Login2);
