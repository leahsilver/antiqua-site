import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { IoPersonSharp } from "react-icons/io5";
import Payment from "./login";
import "./loginModal.css";
import { Link } from "react-router-dom";
import SignUp from "./signUp";
class LoginModal extends Component {
  state = {
    modal: false,
    login: true,
    signUp: false,
    modal2: false,
  };

  loginClick = () => {
    this.setState({ login: true });
    this.setState({ signUp: false });
  };
  signClick = () => {
    this.setState({ signUp: true });
    this.setState({ login: false });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2,
    });
  };
  a = () => {
    this.toggle();
    this.toggle2();
  };
  LOGOUT = () => {
    this.props.changeName("");
    this.toggle2();
  };
  render() {
    return (
      <MDBContainer>
        <IoPersonSharp
          color="white"
          role="button"
          onClick={this.props.name == "" ? this.toggle : this.toggle2}
        />
        <MDBModal
          isOpen={this.state.modal2}
          toggle={this.toggle2}
          className="a"
        >
          <MDBModalBody>
            <button className="buttonLogin" onClick={this.LOGOUT}>
              log out
            </button>
            <button className="buttonLogin" onClick={this.a}>
              change user
            </button>
           
          </MDBModalBody>
        </MDBModal>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>
            <button className="btn-login-up" onClick={this.loginClick}>
              SIGN UP
            </button>
            <button className="btn-signin-up" onClick={this.signClick}>
              SIGN IN
            </button>
          </MDBModalHeader>
          <MDBModalBody>
            {this.state.login && (
              <Payment
                changeName={this.props.changeName}
                onClick={this.toggle}
              />
            )}
          </MDBModalBody>
          <MDBModalBody>
            {this.state.signUp && (
              <SignUp
                changeName={this.props.changeName}
                onClick={this.toggle}
              />
            )}
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default LoginModal;
