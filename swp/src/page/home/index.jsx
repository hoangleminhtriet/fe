import { Button, Card, Col, Image, Row } from "react-bootstrap";
import Banner from "../../assets/image/home1.png";
import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ marginTop: "175px" }}>
      {/*Banner*/}
      <Row className="home-banner">
        <Col className="text-booking">
          Booking <strong>Birthday</strong> For Kids.
          <Col>
            <Link to="/booking">
              <Button className="mt-5">Book Now!!</Button>
            </Link>
          </Col>
        </Col>
        <Col>
          <Image alt="Banner" src={Banner} className="banner-img" />
        </Col>
      </Row>

      {/*Steps*/}
      <Row
        className="text-oder mt-3"
        style={{ textAlign: "center", color: "#8d188d" }}
      >
        <Col>STEPS TO BOOK BIRTHDAY PARTY</Col>
      </Row>

      {/* Package */}
      <Row className="m-3">
        <Col>
          <Card className="steps-card">
            <Card.Img
              className="steps-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/07/birthday1-scaled-1000x600.jpg"
            />
            <Card.Body className="steps-body">
              <Card.Title>SELECT PREFERENCE & PACKAGE</Card.Title>
              <Card.Text className="steps-content">
                The Big Box offers options to book your party during operational
                hours or as a private event. We have predefined party bundles
                for you to choose from. Select what meets best for your needs.
                Consider upgrading to infinite pass on a discounted price for
                unlimited fun extravaganza!
              </Card.Text>
              <Card.Link className="link-name" as="a" href="#birthday-packages">
                Let’s see the Packages!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Combo */}

        <Col>
          <Card className="steps-card">
            <Card.Img
              className="steps-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/07/food.jpg"
            />
            <Card.Body className="steps-body">
              <Card.Title>PICK A FOOD COMBO</Card.Title>
              <Card.Text className="steps-content">
                Choose from our menu the variety of food options available to
                cater to your guests of all ages. We do offer gluten-friendly
                and Halal options for families with dietary/religious
                restrictions.
              </Card.Text>
              <Card.Link className="link-name" as="a" href="#birthday-packages">
                Check Food Options Now!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Spot */}

        <Col>
          <Card className="steps-card">
            <Card.Img
              className="steps-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/07/birthday2.jpg"
            />
            <Card.Body className="steps-body">
              <Card.Title>RESERVE YOUR SPOT ONLINE</Card.Title>
              <Card.Text className="steps-content">
                Once you select your best fit package and food combo, you are
                now ready to book your birthday online by clicking the link
                below. After deposit payment, your spot will be reserved and a
                confirmation email will be sent to you with all the booking
                details.
              </Card.Text>
              <Card.Link className="link-name" as="a" href="#birthday-packages">
                Book Now!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Waiver */}

        <Col>
          <Card className="steps-card">
            <Card.Img
              className="steps-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/07/The-Big-Box-Stills_051-scaled-1000x600.jpg"
            />
            <Card.Body className="steps-body">
              <Card.Title>SIGN A WAIVER ONLINE</Card.Title>
              <Card.Text className="steps-content">
                You are all set! One last step is to get all your guests to sign
                the waiver before the celebration day to ensure a smooth
                check-in process. Please click the link below to sign the
                waiver.
              </Card.Text>
              <Card.Link className="link-name" as="a" href="#birthday-packages">
                Sign Today!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*Party*/}
      <Row
        className="text-oder mt-3"
        style={{ textAlign: "center", fontSize: "400%" }}
      >
        <Col style={{ color: "#8d188d" }}>PARTY PACKAGES</Col>
      </Row>

      {/* Ultimate */}
      <Row className="m-1">
        <Col>
          <Card className="party-card" id="birthday-packages">
            <Card.Img
              className="party-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/03/birthday-party-with-friends.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{ textAlign: "center", backgroundColor: "green" }}
              >
                ULTIMATE
              </Card.Title>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card
                  className="card-text-party"
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  <Card.Text className="text-party1">$649.99</Card.Text>
                  <Card.Text className="text-party2">
                    + GST for 10 participants
                  </Card.Text>
                  <Card.Text className="text-party2">
                    $54.99 per additional participant
                  </Card.Text>
                </Card>
              </Row>
              <Card.Text className="party-content">
                Includes 10 kids admissions to Leisure Lagoon Includes up to 20
                adult admissions to Leisure Lagoon Private party space for 90
                minutes Unlimited Play time before & after the party time 1000
                E-tickets for the birthday child to redeem Prizes 40 arcade
                credits for each child 1 bumper car ride for each child 1
                Virtual box ride for each child 1 On-the-fly ropes course for
                each child 1 Grip socks for each child Buddy shirt for the
                birthday child Goodie bag for each child Plates, cups, cutlery,
                napkins & table cloth
              </Card.Text>
              <Row style={{ justifyContent: "center", marginLeft: "37%" }}>
                <Link to="/booking">
                  <Button style={{ maxWidth: "fit-content" }} className="mt-5">
                    Book Now!!
                  </Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="party-card" id="birthday-packages">
            <Card.Img
              className="party-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/03/birthday-party-with-friends.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{ textAlign: "center", backgroundColor: "violet" }}
              >
                FANTASTIC
              </Card.Title>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card
                  className="card-text-party"
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  <Card.Text className="text-party1">$399.99</Card.Text>
                  <Card.Text className="text-party2">
                    + GST for 10 participants
                  </Card.Text>
                  <Card.Text className="text-party2">
                    $32.99 per additional participant
                  </Card.Text>
                </Card>
              </Row>
              <Card.Text className="party-content">
                Includes 10 kids admissions to Leisure Lagoon Includes up to 20
                adult admissions to Leisure Lagoon Private party space for 90
                minutes Unlimited Play time before & after the party time 1000
                E-tickets for the birthday child to redeem Prizes 40 arcade
                credits for each child 1 bumper car ride for each child 1
                Virtual box ride for each child 1 On-the-fly ropes course for
                each child 1 Grip socks for each child Buddy shirt for the
                birthday child Goodie bag for each child Plates, cups, cutlery,
                napkins & table cloth
              </Card.Text>
              <Row style={{ justifyContent: "center", marginLeft: "37%" }}>
                <Link to="/booking">
                  <Button style={{ maxWidth: "fit-content" }} className="mt-5">
                    Book Now!!
                  </Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="party-card" id="birthday-packages">
            <Card.Img
              className="party-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/03/birthday-party-with-friends.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{ textAlign: "center", backgroundColor: "red" }}
              >
                CLASSIC
              </Card.Title>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card
                  className="card-text-party"
                  style={{ textAlign: "center", padding: "10px" }}
                >
                  <Card.Text className="text-party1">$299.99</Card.Text>
                  <Card.Text className="text-party2">
                    + GST for 10 participants
                  </Card.Text>
                  <Card.Text className="text-party2">
                    $22.99 per additional participant
                  </Card.Text>
                </Card>
              </Row>
              <Card.Text className="party-content">
                Includes 10 kids admissions to Leisure Lagoon Includes up to 20
                adult admissions to Leisure Lagoon Private party space for 90
                minutes Unlimited Play time before & after the party time 1000
                E-tickets for the birthday child to redeem Prizes 40 arcade
                credits for each child 1 bumper car ride for each child 1
                Virtual box ride for each child 1 On-the-fly ropes course for
                each child 1 Grip socks for each child Buddy shirt for the
                birthday child Goodie bag for each child Plates, cups, cutlery,
                napkins & table cloth
              </Card.Text>
              <Row style={{ justifyContent: "center", marginLeft: "37%" }}>
                <Link to="/booking">
                  <Button style={{ maxWidth: "fit-content" }} className="mt-5">
                    Book Now!!
                  </Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*Topic*/}

      {/* Party Pagkages */}
      <Card.Title
        className="m-5"
        style={{ textAlign: "center", color: "#8d188d", fontSize: "450%" }}
      >
        PARTY PACKAGES
      </Card.Title>
      <Row className="m-4">
        {/* Food-card1 */}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card-home">
            <Card.Img
              className="food-img-home"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza.png"
            />
            <Card.Body className="food-home-body">
              <Card.Title className="title-food-home">Pizza Combo</Card.Title>
              <Card.Text>
                3‐12″ Pizza & 2 Jugs of Pop (Choice of Cheese, Pepperoni,
                Hawaiian, Chicken, Beef or Veggie)
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">
                    $15.95
                  </Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Food-card2 */}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card-home">
            <Card.Img
              className="food-img-home"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/tender-fries.png"
            />
            <Card.Body className="food-home-body">
              <Card.Title className="title-food-home">
                Chicken Tenders Combo
              </Card.Title>
              <Card.Text>
                20 Chicken Tenders, 6 Trays of Fries & 2 Jugs of Pop/Juice.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">
                    $69.99
                  </Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Food-card3 */}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card-home">
            <Card.Img
              className="food-img-home"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/sandwich-platter-400x400.png"
            />
            <Card.Body className="food-home-body">
              <Card.Title className="title-food-home">
                Sandwich Combo
              </Card.Title>
              <Card.Text>
                7 Sandwiches with options of Ham, Turkey, Chicken, Roast Beef &
                Vegetarian. with 2 jugs of Pop also included.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">
                    $69.99
                  </Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Food-card4 */}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card-home">
            <Card.Img
              className="food-img-home"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/fruit-platter.png"
            />
            <Card.Body className="food-home-body">
              <Card.Title className="title-food-home">Fruit Platter</Card.Title>
              <Card.Text>
                A variety of freshly cut seasonal fruits served in a family
                platter.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">
                    $35.00
                  </Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Food-card5 */}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card-home">
            <Card.Img
              className="food-img-home"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/veggie.png"
            />
            <Card.Body className="food-home-body">
              <Card.Title className="title-food-home">
                Veggie Platter
              </Card.Title>
              <Card.Text>
                A variety of freshly procured seasonal vegetables served in a
                family platter.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">
                    $35.00
                  </Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Food-card6 */}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card-home">
            <Card.Img
              className="food-img-home"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/cookie_platter-4-400x400.png"
            />
            <Card.Body className="food-home-body">
              <Card.Title className="title-food-home">
                Cookies Platter
              </Card.Title>
              <Card.Text>
                A delicious assortment of cookies. Flavors include Chocolate
                Chip, Double Chocolate, Oatmeal & Oatmeal Raisin.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">
                    $40.00
                  </Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Card.Text
          style={{ textAlign: "center", marginTop: "20px", color: "#8d188d" }}
        >
          *Other food options from The Bite Box Cafe can be made available upon
          request (View our full menu)
        </Card.Text>
      </Row>

      <Image fluid />
    </div>
  );
};

export default Home;
