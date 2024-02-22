/* eslint-disable react/prop-types */
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import Logo from "../../assets/image/logo.png";
import "../Header/Header.css";

const Header = ({
  toggleOverview,
  toggleDiscount,
  toggleService,
  toggleContact,
}) => {
  return (
    <BootstrapNavbar expand="lg" className="main-nav">
      <Container>
        <img className="logo-nav" alt="" src={Logo} />

        <BootstrapNavbar.Toggle aria-controls="navbar" />
        <BootstrapNavbar.Collapse id="navbar">
          <Nav className="me-auto" style={{ marginLeft: "40%" }}>
            <Button className="button-header" onClick={toggleOverview}>
              Toggle Overview
            </Button>
            <Button className="button-header" onClick={toggleDiscount}>
              Toggle Discount
            </Button>
            <Button className="button-header" onClick={toggleService}>
              Toggle Service
            </Button>
            <Button className="button-header" onClick={toggleContact}>
              Toggle Contact
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Header;
