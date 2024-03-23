/* eslint-disable react/prop-types */
import { Navbar as BootstrapNavbar, Container, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/image/logo.png";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const Header = ({ toggleOverview, toggleService, toggleContact }) => {
  return (
    <BootstrapNavbar expand="lg" className="main-nav">
      <Container>
        <NavLink className="button-header" to="/">
          <img className="logo-nav" alt="" src={Logo} />
        </NavLink>

        <BootstrapNavbar.Toggle aria-controls="navbar" />
        <BootstrapNavbar.Collapse className="nav-header nav-mobile" id="navbar">
          <Nav>
            <Button className="button-header" onClick={toggleOverview}>
              Overview
            </Button>

            <Button className="button-header">
              <Link style={{ textDecoration: "none" }} className="button-header" to="/food">
                Food
              </Link>
            </Button>

            <Button className="button-header" onClick={toggleService}>
              Service
            </Button>
            <Button className="button-header" onClick={toggleContact}>
              Contact
            </Button>
            <Button className="button-header">
              <Link style={{ textDecoration: "none" }} className="button-header" to="/login">
                Login
              </Link>
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Header;
