import React from "react";
import Link from "gatsby-link";

import { Navbar, Nav, NavItem } from "react-bootstrap";

import "../asset/styles/index.scss";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    return (
      <Navbar inverse fluid collapseOnSelect className="custom-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Gatsby POC</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1}>
              <Link to="/about/">About</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/contact/">Contact</Link>
            </NavItem>
            <NavItem eventKey={3}>
              <Link to="/first-post/">Blog</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
