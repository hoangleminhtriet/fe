import { Button, Card, CardLink, Col, Image, Row } from "react-bootstrap";
import Banner from "../../assets/image/home1.png";
import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../component/Header";
import Overview from "../../component/Navbar/Overview";
import Discount from "../../component/Navbar/Discount";
import Service from "../../component/Navbar/Service";
import Contact from "../../component/Navbar/Contact";
import Footer from "../../component/Footer";
import HeaderLogin from "../../component/HeaderLogin";

const HomeLogin = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const hideAll = () => {
    setShowOverview(false);
    setShowDiscount(false);
    setShowService(false);
    setShowContact(false);
  };

  const toggleOverview = () => {
    if (showOverview) {
      hideAll();
    } else {
      hideAll();
      setShowOverview(true);
    }
  };

  const toggleDiscount = () => {
    if (showDiscount) {
      hideAll();
    } else {
      hideAll();
      setShowDiscount(true);
    }
  };

  const toggleService = () => {
    if (showService) {
      hideAll();
    } else {
      hideAll();
      setShowService(true);
    }
  };

  const toggleContact = () => {
    if (showContact) {
      hideAll();
    } else {
      hideAll();
      setShowContact(true);
    }
  };

  return (
    <div>
      <HeaderLogin
        toggleOverview={toggleOverview}
        toggleDiscount={toggleDiscount}
        toggleService={toggleService}
        toggleContact={toggleContact}
      />
      {showOverview && <Overview />}
      {showDiscount && <Discount />}
      {showService && <Service />}
      {showContact && <Contact />}
      {/*Banner*/}
      <Row className="home-banner">
        <Col className="text-booking">
          Booking <strong>Birthday</strong> For Kids.
          <Col>
            <Link to="/host">
              <Button className="mt-5">Book Now!!</Button>
            </Link>
          </Col>
        </Col>
        <Col>
          <Image alt="Banner" src={Banner} className="banner-img" />
        </Col>
      </Row>

      {/*Steps*/}
      <Row className="text-oder mt-3" style={{ textAlign: "center", color: "#8d188d" }}>
        <Col>STEPS TO BOOK BIRTHDAY PARTY</Col>
      </Row>

      {/* Package */}
      <Row style={{ alignItems: "center" }} className="m-5">
        <Col className="steps-col">
          <Card className="steps-card ">
            <Card.Img
              className="steps-img"
              src="https://thebigbox.ca/wp-content/uploads/2020/07/birthday1-scaled-1000x600.jpg"
            />
            <Card.Body className="steps-body">
              <Card.Title>SELECT PREFERENCE & PACKAGE</Card.Title>
              <Card.Text className="steps-content">
                The Big Box offers options to book your party during operational hours or as a private event. We have
                predefined party bundles for you to choose from. Select what meets best for your needs. Consider
                upgrading to infinite pass on a discounted price for unlimited fun extravaganza!
              </Card.Text>
              <Card.Link className="link-name" as="a" href="#birthday-packages">
                Let’s see the Packages!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Combo */}

        <Col className="steps-col">
          <Card className="steps-card">
            <Card.Img className="steps-img" src="https://thebigbox.ca/wp-content/uploads/2020/07/food.jpg" />
            <Card.Body className="steps-body">
              <Card.Title>PICK A FOOD COMBO</Card.Title>
              <Card.Text className="steps-content">
                Choose from our menu the variety of food options available to cater to your guests of all ages. We do
                offer gluten-friendly and Halal options for families with dietary/religious restrictions.
              </Card.Text>
              <Card.Link className="link-name" as="a" href="#check-food-options">
                Check Food Options Now!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Spot */}

        <Col className="steps-col">
          <Card className="steps-card">
            <Card.Img className="steps-img" src="https://thebigbox.ca/wp-content/uploads/2020/07/birthday2.jpg" />
            <Card.Body className="steps-body">
              <Card.Title>RESERVE YOUR SPOT ONLINE</Card.Title>
              <Card.Text className="steps-content">
                Once you select your best fit package and food combo, you are now ready to book your birthday online by
                clicking the link below. After deposit payment, your spot will be reserved and a confirmation email will
                be sent to you with all the booking details.
              </Card.Text>
              <Card.Link className="link-name" as="a" href="/host">
                Book Now!
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Waiver */}

        {/* <Col>
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
        </Col> */}
      </Row>

      {/*Party*/}
      <Row className="text-oder mt-3" style={{ textAlign: "center", fontSize: "400%" }}>
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
                style={{
                  textAlign: "center",
                  backgroundColor: "green",
                  fontSize: "200%",
                  borderRadius: "20px",
                }}
              >
                ULTIMATE
              </Card.Title>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="card-text-party" style={{ textAlign: "center", padding: "10px" }}>
                  <Card.Text className="text-party1">$649.99</Card.Text>
                  <Card.Text className="text-party2">+ GST for 10 participants</Card.Text>
                  <Card.Text className="text-party2">$54.99 per additional participant</Card.Text>
                </Card>
              </Row>
              <Card.Text className="party-content">
                <ul>
                  <li>Includes 10 kids admissions to Leisure Lagoon</li>
                  <li>Includes up to 20 adult admissions to Leisure Lagoon</li>
                  <li>Private party space for 90 minutes</li>
                  <li>Unlimited Play time before & after the party time</li>
                  <li>1000 E-tickets for the birthday child to redeem Prizes</li>
                  <li>40 arcade credits for each child</li>
                  <li>1 bumper car ride for each child</li>
                  <li>1 Virtual box ride for each child</li>
                  <li>1 On-the-fly ropes course for each child</li>
                  <li>Grip socks for each child</li>
                  <li>Buddy shirt for the birthday child</li>
                  <li>Goodie bag for each child</li>
                  <li>Plates, cups, cutlery, napkins & table cloth</li>
                </ul>
              </Card.Text>
              <Row style={{ justifyContent: "center", marginLeft: "37%" }}>
                <Link to="/host">
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
              src="https://thebigbox.ca/wp-content/uploads/2020/03/the-happy-bumper-car.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  backgroundColor: "violet",
                  fontSize: "200%",
                  borderRadius: "20px",
                }}
              >
                FANTASTIC
              </Card.Title>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="card-text-party" style={{ textAlign: "center", padding: "10px" }}>
                  <Card.Text className="text-party1">$399.99</Card.Text>
                  <Card.Text className="text-party2">+ GST for 10 participants</Card.Text>
                  <Card.Text className="text-party2">$32.99 per additional participant</Card.Text>
                </Card>
              </Row>
              <Card.Text className="party-content">
                <ul>
                  <li>Includes 10 kids admissions to Leisure Lagoon</li>
                  <li>Includes up to 20 adult admissions to Leisure Lagoon</li>
                  <li>Private party space for 90 minutes</li>
                  <li>Unlimited Play time before & after the party time</li>
                  <li>500 E-tickets for the birthday child to redeem Prizes</li>
                  <li>30 arcade credits for each child</li>
                  <li>1 bumper car ride for each child</li>
                  <li>1 1 Grip socks for each child</li>
                  <li>Buddy shirt for the birthday child</li>
                  <li>Plates, cups, cutlery, napkins & table cloth</li>
                </ul>
              </Card.Text>
              <Row style={{ justifyContent: "center", marginLeft: "37%" }}>
                <Link to="/host">
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
              src="https://thebigbox.ca/wp-content/uploads/2020/07/The-Big-Box-Stills_097-scaled-1000x600.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  backgroundColor: "red",
                  fontSize: "200%",
                  borderRadius: "20px",
                }}
              >
                CLASSIC
              </Card.Title>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="card-text-party" style={{ textAlign: "center", padding: "10px" }}>
                  <Card.Text className="text-party1">$299.99</Card.Text>
                  <Card.Text className="text-party2">+ GST for 10 participants</Card.Text>
                  <Card.Text className="text-party2">$22.99 per additional participant</Card.Text>
                </Card>
              </Row>
              <Card.Text className="party-content">
                <ul>
                  <li>Includes 10 kids admissions to Leisure Lagoon</li>
                  <li>Includes up to 20 adult admissions to Leisure Lagoon</li>
                  <li>Private party space for 90 minutes</li>
                  <li>Unlimited Play time before & after the party time</li>
                  <li>100 E-tickets for the birthday child to redeem Prizes</li>
                  <li>20 arcade credits for each child</li>
                  <li>Plates, cups, cutlery, napkins & table cloth</li>
                </ul>
              </Card.Text>
              <Row style={{ justifyContent: "center", marginLeft: "37%" }}>
                <Link to="/host">
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
      <Card.Title className="m-5" style={{ textAlign: "center", color: "#8d188d", fontSize: "450%" }}>
        PARTY PACKAGES
      </Card.Title>
      <Row className="m-4" id="check-food-options">
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
                3‐12″ Pizza & 2 Jugs of Pop (Choice of Cheese, Pepperoni, Hawaiian, Chicken, Beef or Veggie)
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">$15.95</Card.Text>
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
              <Card.Title className="title-food-home">Chicken Tenders Combo</Card.Title>
              <Card.Text>20 Chicken Tenders, 6 Trays of Fries & 2 Jugs of Pop/Juice.</Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">$69.99</Card.Text>
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
              <Card.Title className="title-food-home">Sandwich Combo</Card.Title>
              <Card.Text>
                7 Sandwiches with options of Ham, Turkey, Chicken, Roast Beef & Vegetarian. with 2 jugs of Pop also
                included.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">$69.99</Card.Text>
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
              <Card.Text>A variety of freshly cut seasonal fruits served in a family platter.</Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">$35.00</Card.Text>
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
              <Card.Title className="title-food-home">Veggie Platter</Card.Title>
              <Card.Text>A variety of freshly procured seasonal vegetables served in a family platter.</Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">$35.00</Card.Text>
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
              <Card.Title className="title-food-home">Cookies Platter</Card.Title>
              <Card.Text>
                A delicious assortment of cookies. Flavors include Chocolate Chip, Double Chocolate, Oatmeal & Oatmeal
                Raisin.
              </Card.Text>
              <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                <Card className="food-price-home">
                  <Card.Text className="mb-0 price-title1-home">$40.00</Card.Text>
                  <Card.Text className="price-title2-home">+ GST</Card.Text>
                </Card>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Card.Text style={{ textAlign: "center", marginTop: "20px", color: "#8d188d" }}>
          *Other food options from The Bite Box Cafe can be made available upon request
          <CardLink href="/food"> (View our full menu)</CardLink>
        </Card.Text>
      </Row>

      <Footer />
    </div>
  );
};

export default HomeLogin;
