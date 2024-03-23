import { Row, Col, Image, Form, Button, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Logo from "../../assets/image/logo.png";
import { Flex } from "antd";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#300058",
        color: "#fff",
        padding: "20px",
        marginTop: "5em",
      }}
    >
      <Container>
        <Row>
          <Col style={{ textAlign: "left" }}>
            <Image src={Logo} alt="FPT Booking" style={{ maxWidth: "150px" }} />
            <div>
              <Flex align="center">
                <FaFacebook size={30} className="m-1" style={{ color: "#fff" }} />
                <AiFillTwitterCircle size={30} className="m-4" style={{ color: "#fff" }} />
                <FaInstagram size={30} className="m-1" style={{ color: "#fff" }} />
              </Flex>
            </div>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>Address:</p>
            <p>FPT University HCMC</p>
            <p>Saigon Hi-tech park district 9</p>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>Email:</p>
            <a href="mailto:contact@fptbooking.com" style={{ color: "#fff" }}>
              birthdaykids@bookingbirthday.com
            </a>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>Phone number:</p>
            <p>6477333333</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
