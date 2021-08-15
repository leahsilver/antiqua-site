import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import ModalPage from "../modal cart/modalCart";
import logo from "../../images/logo.png";
import "./nav.css";
import LoginModal from "../login/loginModal";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="nav" dark expand="md">
        <MDBNavbarBrand>
          <img src={logo} style={{ width: "40px" ,marginLeft:"3%",marginLeft:"10px"}}></img>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink active to="./Art">
                Art
              </MDBNavLink>{" "}
            </MDBNavItem>{" "}
            <MDBNavItem>
              <MDBNavLink active to="./Judaica">
                Judaica
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink active to="./Stamps">
                Stamps
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink active to="./Coins">
                Coins
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink active to="./forum">
                Forum
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">about</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBNavLink active to="/aboutUs">
                    about us
                  </MDBNavLink>
                  <MDBNavLink active to="/FAQ">
                    FAQ
                  </MDBNavLink>
                  <MDBNavLink active to="/opinion">
                    Opinion
                  </MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <div style={{ whiteSpace: "nowrap", marginTop: "8px" }}>
              {this.props.name}
            </div>
            <LoginModal
              changeName={this.props.changeName}
              name={this.props.name}
              payment={this.props.payment}
            />{" "}
            <ModalPage
              list={this.props.list}
              payment={this.props.payment}
              reduce={this.props.reduce}
            />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
