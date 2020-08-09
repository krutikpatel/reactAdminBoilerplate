import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import SidebarContent from './SidebarContent';
import ContentWrapper from './ContentWrapper';
import { connect } from 'react-redux';

class LandingPage extends Component {
    /*
    render ONLY if authenticated
    */
    render() {
        if(this.props.isSignedIn) {
            return (
                <div className="wrapper">
                    <Header></Header>
                    <Menu></Menu>
                    <ContentWrapper></ContentWrapper> {/* knote: since all routes needs to be at one place 
                                                    and we dont want to add "common" components to each of them, all these are defined 
                                                    under this component */}
                    <SidebarContent></SidebarContent>
                    <Footer></Footer>
                </div>
            )
        } else {
            return ( <div></div>)
        }
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
)(LandingPage);
