import { Row, Col, Image, Form, Button, Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Logo from "../../assets/image/logo.png";

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
              <FaFacebook size={30} className="m-1" style={{ color: "#fff" }} />
              <AiFillTwitterCircle
                size={30}
                className="m-4"
                style={{ color: "#fff" }}
              />
              <FaInstagram
                size={30}
                className="m-1"
                style={{ color: "#fff" }}
              />
            </div>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>Địa chỉ:</p>
            <p>FPT University HCMC</p>
            <p>Saigon Hi-tech park district 9</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Nhập địa chỉ email của bạn"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Đăng ký nhận mail
              </Button>
            </Form>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>Email:</p>
            <a href="mailto:contact@fptbooking.com" style={{ color: "#fff" }}>
              contact@fptbooking.com
            </a>
          </Col>

          <Col style={{ textAlign: "left" }}>
            <p>Số điện thoại:</p>
            <p>0123456789</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
