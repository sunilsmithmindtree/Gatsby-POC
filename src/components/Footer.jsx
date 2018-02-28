import React from "react";
import Link from "gatsby-link";

import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="footer">
        <ul>
          <li>
            <a href="#">Terms & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a id="_bapw-link" href="#">
              {/* <img id="_bapw-icon" src={AdChoiceIcon} /> */}
              <span>AdChoices</span>
            </a>
          </li>
          <li>
            <a href="#">SiteMap</a>
          </li>
        </ul>
        <ul>
          <li>&copy; 2018 Procter & Gamble</li>
        </ul>
      </div>;
  }
}
