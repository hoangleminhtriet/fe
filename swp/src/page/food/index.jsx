/* eslint-disable react/no-unescaped-entities */
import { Card, Col, Container, Row } from "react-bootstrap";
import "./index.scss";
import { useState } from "react";
import Header from "../../component/Header";
import Overview from "../../component/Navbar/Overview";
import Service from "../../component/Navbar/Service";
import Contact from "../../component/Navbar/Contact";
import Footer from "../../component/Footer";
import HeaderLogin from "../../component/HeaderLogin";
import { useSelector } from "react-redux";

const Food = () => {
  const [showOverview, setShowOverview] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const user = useSelector((store) => store.user);

  const hideAll = () => {
    setShowOverview(false);
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
      {user ? (
        <HeaderLogin toggleOverview={toggleOverview} toggleService={toggleService} toggleContact={toggleContact} />
      ) : (
        <Header toggleOverview={toggleOverview} toggleService={toggleService} toggleContact={toggleContact} />
      )}
      {showOverview && <Overview />}
      {showService && <Service />}
      {showContact && <Contact />}
      <Container className="mt-3">
        <h1 style={{ textAlign: "center", color: "#8d188d" }}>FOOD MENU</h1>
        <Row className="test1">
          {/*Food1*/}
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza.png"
              />
              <Card.Body className="food-card-body">
                <Card.Title className="title-food">Traditional Pizza</Card.Title>
                <Card.Text>Pepperoni / Hawaiian / Beef / Chicken</Card.Text>
                <Row
                  style={{
                    flexWrap: "nowrap",
                    justifyContent: "center",
                  }}
                >
                  <Card className="food-price" style={{ marginRight: "5px" }}>
                    <Card.Title className="price-detail">10"</Card.Title>
                    <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">12"</Card.Title>
                    <Card.Text className="mb-0 price-title1">$19.95</Card.Text>
                  </Card>
                </Row>
                <Card.Text className="mt-1">Gluten-friendly option available</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza-1.png"
              />
              <Card.Body className="food-card-body">
                <Card.Title className="title-food">Traditional Pizza</Card.Title>
                <Card.Text>Vegetarian / Cheese</Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price" style={{ marginRight: "5px" }}>
                    <Card.Title className="price-detail">10"</Card.Title>
                    <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">12"</Card.Title>
                    <Card.Text className="mb-0 price-title1">$19.95</Card.Text>
                  </Card>
                </Row>
                <Card.Text className="mt-1">Gluten-friendly option available</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/wings.png"
              />
              <Card.Body className="food-card-body">
                <Card.Title className="title-food">Chicken Wings</Card.Title>
                <Card.Text>
                  8 pieces served with veggies & ranch Hot / Teriyaki / Honey Garlic / Salt & Pepper / Plain
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0 price-title1">$15.95</Card.Text>
                  </Card>
                </Row>
                <Card.Text className="mt-1">Gluten-friendly option available</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Food2 */}
        <Row>
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/tender-fries.png"
              />
              <Card.Body className="food-card-body">
                <Card.Title className="title-food">Chicken Tenders</Card.Title>
                <Card.Text>Sweet n’ Sour, Honey Mustard & BBQ Sauces available to choose from.</Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price" style={{ marginRight: "5px" }}>
                    <Card.Title className="price-detail">Tenders only</Card.Title>
                    <Card.Text className="mb-0 price-title1">$6.95</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">w/ Fries & Drink</Card.Title>
                    <Card.Text className="mb-0 price-title1">$10.95</Card.Text>
                  </Card>
                </Row>
                <Card.Text className="mt-1">Gluten-friendly option available</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/hot-dog.png"
              />
              <Card.Body className="food-card-body">
                <Card.Title className="title-food">Hot Dog</Card.Title>
                <Card.Text>Exotic Beef Hot Dog served in a slit of the partially sliced bun.</Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price" style={{ marginRight: "5px" }}>
                    <Card.Title className="price-detail">Hot dog only</Card.Title>
                    <Card.Text className="mb-0 price-title1">$4.50</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">w/ Fries & Drink</Card.Title>
                    <Card.Text className="mb-0 price-title1  ">$9.90</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/ultimate-nachos-01.png"
              />
              <Card.Body className="food-card-body">
                <Card.Title className="title-food">Nachos Platter</Card.Title>
                <Card.Text>**THIS ITEM IS CURRENTLY UNAVAILABLE**</Card.Text>
                <Card.Text>Add a delicious meat topping. Options include Fajita Chicken or Beef.</Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text style={{ fontWeight: "bold", fontSize: "20px" }}>N/A</Card.Text>
                  </Card>
                </Row>
                <Card.Text>$1.99</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/*Food3*/}
        <Row>
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/sandwich.png"
              />
              <Card.Body>
                <Card.Title className="title-food">Sandwiches</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0 price-title1">$7.95</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/wrap.png"
              />
              <Card.Body>
                <Card.Title className="title-food">Wraps</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0 price-title1">$7.95</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/fruit-plus-veggie.png"
              />
              <Card.Body>
                <Card.Title className="title-food">Veggie / Friut Cups</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0 price-title1">$5.95</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/salad.png"
              />
              <Card.Body>
                <Card.Title className="title-food">Salads</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0 price-title1">$6.95</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Food;
