import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="navbar_full_width">
      <Container fluid>
        {/* Left section: Logo */}
        <div className="header_left">
          <Navbar.Brand href="#">
            <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <div className="header_container">
            <div className="header_left">
              <Nav className="ml-auto">
                <ul>
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>Latest</li>
                  <li>My List</li>
                  <li>Browse by Languages</li>
                </ul>
              </Nav>
            </div>

            <div className="header_right">
              <ul>
                <li>
                  <SearchIcon />
                </li>
                <li>
                  <NotificationsNoneIcon />
                </li>
                <li>
                  <AccountBoxIcon />
                </li>
                <li>
                  <ArrowDropDownIcon />
                </li>
              </ul>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
