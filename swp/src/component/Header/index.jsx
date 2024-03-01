/* eslint-disable react/prop-types */
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import Logo from "../../assets/image/logo.png";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";

const Header = ({
  toggleOverview,
  toggleDiscount,
  toggleService,
  toggleContact,
}) => {
  return (
    <BootstrapNavbar expand="lg" className="main-nav">
      <Container>
        <NavLink className="button-header" to="/">
          <img className="logo-nav" alt="" src={Logo} />
        </NavLink>

        <BootstrapNavbar.Toggle aria-controls="navbar" />
        <BootstrapNavbar.Collapse id="navbar">
          <Nav className="me-auto" style={{ marginLeft: "40%" }}>
            <Button className="button-header" onClick={toggleOverview}>
              Overview
            </Button>
            <Button className="button-header" onClick={toggleDiscount}>
              Discount
            </Button>
            <Link to="/food">
              <Button className="button-header">Food</Button>
            </Link>

            <Button className="button-header" onClick={toggleService}>
              Service
            </Button>
            <Button className="button-header" onClick={toggleContact}>
              Contact
            </Button>
            <Link to="/login">
              <Button className="button-header">Login</Button>
            </Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Header;
