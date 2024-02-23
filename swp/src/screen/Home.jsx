import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Home1 from "../assets/image/home1.png";
import FAQ from "../assets/image/faq.png";
import ThucDon from "../assets/image/thucdon.png";
import UuDai from "../assets/image/uudai.png";
import BasicIcon from "../assets/image/basic.png";
import PremiumIcon from "../assets/image/premium.png";
import StandardIcon from "../assets/image/standard.png";
import Topic from "../assets/image/topic.png";
import Service from "../assets/image/service.png";

const Home = () => {
  return (
    <div>
      {/*Banner*/}
      <Container style={{ backgroundColor: "#DEF3FF", borderRadius: "25px" }}>
        {}
        <Row>
          <Col className="text-booking">
            Booking <strong>Birthday</strong> For Kids.
            <Col>
              <Button className="mt-5" variant="primary">
                Đặt tiệc ngay
              </Button>
            </Col>
          </Col>
          <Col>
            <Image src={Home1} alt="123" />
          </Col>
        </Row>
      </Container>

      {/*Order*/}
      <Container className="mt-3">
        <Row className="text-oder" style={{ textAlign: "center" }}>
          <Col>ĐẶT TIỆC SINH NHẬT</Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Image fluid src={FAQ} />
          </Col>
          <Col>
            <Image fluid src={ThucDon} />
          </Col>
          <Col>
            <Image fluid src={UuDai} />
          </Col>
        </Row>
      </Container>

      {/*Party*/}
      <Container className="mt-5">
        <Row className="text-oder" style={{ textAlign: "center" }}>
          <Col>Các gói tiệc chúng tôi có</Col>
        </Row>

        <Row>
          {/*Basic*/}
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#B8E0C8" }}>
              <Card.Img variant="top" src={BasicIcon} />
              <Card.Body className="mt-5">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Button className="mt-5" variant="primary">
                  Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/*Standard*/}
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#F2BACE" }}>
              <Card.Img variant="top" src={StandardIcon} />
              <Card.Body className="mt-5">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Button className="mt-5" variant="primary">
                  Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/*Premium*/}
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#E0C258" }}>
              <Card.Img variant="top" src={PremiumIcon} />
              <Card.Body className="mt-5">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Button className="mt-5" variant="primary">
                  Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <Button className="mt-3" variant="primary">
              Đặt tiệc ngay
            </Button>
          </Col>
        </Row>
      </Container>

      {/*Topic*/}
      <Container className="mt-5">
        <Image src={Topic} fluid />
      </Container>

      {/*Service*/}
      <Container>
        <Col>Text</Col>
        <Image src={Service} fluid />
      </Container>
    </div>
  );
};

export default Home;
