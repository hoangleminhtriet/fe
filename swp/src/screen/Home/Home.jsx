import { Button, Card, Col, Image, Row } from "react-bootstrap";
import Banner from "../../assets/image/home1.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/*Banner*/}

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
          <Image alt="Banner" fluid src={Banner} />
        </Col>
      </Row>

      {/*Steps*/}
      <Row className="text-oder mt-3" style={{ textAlign: "center" }}>
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
            <Card.Body className="">
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
      <Row className="text-oder mt-3" style={{ textAlign: "center" }}>
        <Col>PARTY PACKAGES</Col>
      </Row>

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
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*Topic*/}

      {/* Party Pagkages */}
      <Card.Title style={{ textAlign: "center", color: "yellow" }}>
        Party Pagkages
      </Card.Title>
      <Row className="test1">
        {/*Food1*/}
        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card">
            <Card.Img
              className="food-img"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza.png"
            />
            <Card.Body>
              <Card.Title className="title-food">Pizza Combo</Card.Title>
              <Card.Text>
                3‐12″ Pizza & 2 Jugs of Pop (Choice of Cheese, Pepperoni,
                Hawaiian, Chicken, Beef or Veggie)
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price">
                  <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  <Card.Text className="price-title2">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card">
            <Card.Img
              className="food-img"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/tender-fries.png"
            />
            <Card.Body>
              <Card.Title className="title-food">
                Chicken Tenders Combo
              </Card.Title>
              <Card.Text>
                20 Chicken Tenders, 6 Trays of Fries & 2 Jugs of Pop/Juice.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price">
                  <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  <Card.Text className="price-title2">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card">
            <Card.Img
              className="food-img"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/sandwich-platter-400x400.png"
            />
            <Card.Body>
              <Card.Title className="title-food">Sandwich Combo</Card.Title>
              <Card.Text>
                7 Sandwiches with options of Ham, Turkey, Chicken, Roast Beef &
                Vegetarian. with 2 jugs of Pop also included.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price">
                  <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  <Card.Text className="price-title2">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card">
            <Card.Img
              className="food-img"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/fruit-platter.png"
            />
            <Card.Body>
              <Card.Title className="title-food">Fruit Platter</Card.Title>
              <Card.Text>
                A variety of freshly cut seasonal fruits served in a family
                platter.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price">
                  <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  <Card.Text className="price-title2">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card">
            <Card.Img
              className="food-img"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/veggie.png"
            />
            <Card.Body>
              <Card.Title className="title-food">Veggie Platter</Card.Title>
              <Card.Text>
                A variety of freshly procured seasonal vegetables served in a
                family platter.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price">
                  <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  <Card.Text className="price-title2">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col className="m-1" style={{ textAlign: "center" }}>
          <Card className="food-card">
            <Card.Img
              className="food-img"
              variant="top"
              src="https://thebigbox.ca/wp-content/uploads/2020/04/cookie_platter-4-400x400.png "
            />
            <Card.Body>
              <Card.Title className="title-food">Cookies Platter</Card.Title>
              <Card.Text>
                A delicious assortment of cookies. Flavors include Chocolate
                Chip, Double Chocolate, Oatmeal & Oatmeal Raisin.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price">
                  <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  <Card.Text className="price-title2">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Card.Text style={{ textAlign: "center" }}>
          *Other food options from The Bite Box Cafe can be made available upon
          request (View our full menu)
        </Card.Text>
      </Row>

      <Image fluid />
    </div>
  );
};

export default Home;
