/* eslint-disable react/prop-types */
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import Logo from "../../assets/image/logo.png";
import "../Header/Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({
  toggleOverview,
  toggleDiscount,
  toggleService,
  toggleContact,
}) => {
  const navigate = useNavigate();
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
            <Button className="button-header" onClick={() => navigate("/food")}>
              Food
            </Button>
            <Button className="button-header" onClick={toggleService}>
              Service
            </Button>
            <Button className="button-header" onClick={toggleContact}>
              Contact
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Header;
