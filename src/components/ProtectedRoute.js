
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;//if authenticated, render this component
        const isAuthenticated = this.props.isSignedIn;
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

const mapStateToProps = state => {
    return {
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
    };
  };
  
export default connect(
    mapStateToProps
)(ProtectedRoute);