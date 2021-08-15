import React, { Component } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";
import { red } from "@material-ui/core/colors";

class ModalPage extends Component {
  state = {
    modal8: false,
    modal9: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <FaShoppingCart color="white" role="button" onClick={this.toggle(8)} />
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={this.toggle(8)} className="hed-cart">
            <FaShoppingCart />{" "}
          </MDBModalHeader>
          <MDBModalBody>
            <Cart
              list={this.props.list}
              payment={this.props.payment}
              reduce={this.props.reduce}
            />
          </MDBModalBody>
          <MDBModalFooter>
            {this.props.payment && (
              <Link
                className="link-to-check"
                to="/payment"
                onClick={this.toggle(8)}
              >
                check out
              </Link>
            )}
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
