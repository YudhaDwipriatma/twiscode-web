/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { NavLink } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { style, isSticky } = this.props;
    return (
      <header
        className={isSticky ? `header bg-nav shadow-sm sticky` : `header`}
        style={style}
      >
        <div className="container main-menu">
          <Navbar light expand="md">
            <NavbarToggler onClick={this.toggle} />

            <NavbarBrand href="/">
              <img src="../../public/img/logo.png" alt="" />
            </NavbarBrand>

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto d-flex align-items-center" navbar>
                <NavItem>
                  <NavLink to="/">HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">PORTOFOLIO</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/careers">CAREERS</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact">CONTACT US</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/">PRIVACY POLICY</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

