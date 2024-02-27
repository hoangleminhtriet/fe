import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Home.css";

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
                Book Now!!
              </Button>
            </Col>
          </Col>
          <Col>
            <Image alt="123" />
          </Col>
        </Row>
      </Container>

      {/*Steps*/}
      <Row className="text-oder mt-3" style={{ textAlign: "center" }}>
        <Col>STEPS TO BOOK BIRTHDAY PARTY</Col>
      </Row>
      <Container className="mt-3" style={{ display: "flex" }}>
        {/* Package */}
        <Row className="m-3">
          <Col>
            <Card className="steps-card">
              <Card.Img
                className="steps-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/07/birthday1-scaled-1000x600.jpg"
              />
              <Card.Body>
                <Card.Title>SELECT PREFERENCE & PACKAGE</Card.Title>
                <Card.Text className="steps-content">
                  The Big Box offers options to book your party during
                  operational hours or as a private event. We have predefined
                  party bundles for you to choose from. Select what meets best
                  for your needs. Consider upgrading to infinite pass on a
                  discounted price for unlimited fun extravaganza!
                </Card.Text>
                <Card.Link as="a" href="#birthday-packages">
                  Let’s see the Packages!
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Combo */}
        <Row className="m-3">
          <Col>
            <Card className="steps-card">
              <Card.Img
                className="steps-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/07/food.jpg"
              />
              <Card.Body>
                <Card.Title>PICK A FOOD COMBO</Card.Title>
                <Card.Text className="steps-content">
                  Choose from our menu the variety of food options available to
                  cater to your guests of all ages. We do offer gluten-friendly
                  and Halal options for families with dietary/religious
                  restrictions.
                </Card.Text>
                <Card.Link as="a" href="#birthday-packages">
                  Check Food Options Now!
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Spot */}
        <Row className="m-3">
          <Col>
            <Card className="steps-card">
              <Card.Img
                className="steps-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/07/birthday2.jpg"
              />
              <Card.Body>
                <Card.Title>RESERVE YOUR SPOT ONLINE</Card.Title>
                <Card.Text className="steps-content">
                  Once you select your best fit package and food combo, you are
                  now ready to book your birthday online by clicking the link
                  below. After deposit payment, your spot will be reserved and a
                  confirmation email will be sent to you with all the booking
                  details.
                </Card.Text>
                <Card.Link as="a" href="#birthday-packages">
                  Book Now!
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Waiver */}
        <Row className="m-3">
          <Col>
            <Card className="steps-card">
              <Card.Img
                className="steps-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/07/The-Big-Box-Stills_051-scaled-1000x600.jpg"
              />
              <Card.Body>
                <Card.Title>SIGN A WAIVER ONLINE</Card.Title>
                <Card.Text className="steps-content">
                  You are all set! One last step is to get all your guests to
                  sign the waiver before the celebration day to ensure a smooth
                  check-in process. Please click the link below to sign the
                  waiver.
                </Card.Text>
                <Card.Link as="a" href="#birthday-packages">
                  Sign Today!
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*Party*/}
      <Row className="text-oder mt-3" style={{ textAlign: "center" }}>
        <Col>PARTY PACKAGES</Col>
      </Row>

      <Container className="mt-5 d-flex">
        {/* Ultimate */}
        <Row className="m-3">
          <Col>
            <Card className="party-card" id="birthday-packages">
              <Card.Img
                className="party-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/03/birthday-party-with-friends.jpg"
              />
              <Card.Body>
                <Card.Title>ULTIMATE</Card.Title>
                <Card.Text className="party-content">
                  Includes 10 kids admissions to Leisure Lagoon Includes up to
                  20 adult admissions to Leisure Lagoon Private party space for
                  90 minutes Unlimited Play time before & after the party time
                  1000 E-tickets for the birthday child to redeem Prizes 40
                  arcade credits for each child 1 bumper car ride for each child
                  1 Virtual box ride for each child 1 On-the-fly ropes course
                  for each child 1 Grip socks for each child Buddy shirt for the
                  birthday child Goodie bag for each child Plates, cups,
                  cutlery, napkins & table cloth
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Card className="party-card" id="birthday-packages">
              <Card.Img
                className="party-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/03/birthday-party-with-friends.jpg"
              />
              <Card.Body>
                <Card.Title>ULTIMATE</Card.Title>
                <Card.Text className="party-content">
                  Includes 10 kids admissions to Leisure Lagoon Includes up to
                  20 adult admissions to Leisure Lagoon Private party space for
                  90 minutes Unlimited Play time before & after the party time
                  1000 E-tickets for the birthday child to redeem Prizes 40
                  arcade credits for each child 1 bumper car ride for each child
                  1 Virtual box ride for each child 1 On-the-fly ropes course
                  for each child 1 Grip socks for each child Buddy shirt for the
                  birthday child Goodie bag for each child Plates, cups,
                  cutlery, napkins & table cloth
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="m-3">
          <Col>
            <Card className="party-card" id="birthday-packages">
              <Card.Img
                className="party-img"
                src="https://thebigbox.ca/wp-content/uploads/2020/03/birthday-party-with-friends.jpg"
              />
              <Card.Body>
                <Card.Title>ULTIMATE</Card.Title>
                <Card.Text className="party-content">
                  Includes 10 kids admissions to Leisure Lagoon Includes up to
                  20 adult admissions to Leisure Lagoon Private party space for
                  90 minutes Unlimited Play time before & after the party time
                  1000 E-tickets for the birthday child to redeem Prizes 40
                  arcade credits for each child 1 bumper car ride for each child
                  1 Virtual box ride for each child 1 On-the-fly ropes course
                  for each child 1 Grip socks for each child Buddy shirt for the
                  birthday child Goodie bag for each child Plates, cups,
                  cutlery, napkins & table cloth
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*Topic*/}
      <Container className="mt-5">
        <Image fluid />
      </Container>
    </div>
  );
};

export default Home;
