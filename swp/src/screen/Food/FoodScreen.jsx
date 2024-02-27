import { Card, Col, Container, Row } from "react-bootstrap";
import "./FoodScreen.css";

export default function FoodScreen() {
  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>Menu</h1>
        <Row className="test1">
          {/*Food1*/}
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card className="food-card">
              <Card.Img
                className="food-img"
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza.png"
              />
              <Card.Body>
                <Card.Title>Traditional Pizza</Card.Title>
                <Card.Text>Pepperoni / Hawaiian / Beef / Chicken</Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Title className="price-detail">10"</Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">12"</Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
                src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza-1.png"
              />
              <Card.Body>
                <Card.Title>Traditional Pizza</Card.Title>
                <Card.Text>Vegetarian / Cheese</Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Title className="price-detail">10"</Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">12"</Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
                src="https://thebigbox.ca/wp-content/uploads/2020/04/wings.png"
              />
              <Card.Body>
                <Card.Title>Chicken Wings</Card.Title>
                <Card.Text>
                  8 pieces served with veggies & ranch Hot / Teriyaki / Honey
                  Garlic / Salt & Pepper / Plain
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
                  </Card>
                </Row>
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
              <Card.Body>
                <Card.Title>Chicken Tenders</Card.Title>
                <Card.Text>
                  Sweet n’ Sour, Honey Mustard & BBQ Sauces available to choose
                  from.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Title className="price-detail">
                      Tenders only
                    </Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">
                      w/ Fries & Drink
                    </Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
                src="https://thebigbox.ca/wp-content/uploads/2020/04/hot-dog.png"
              />
              <Card.Body>
                <Card.Title>Hot Dog</Card.Title>
                <Card.Text>
                  Exotic Beef Hot Dog served in a slit of the partially sliced
                  bun.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Title className="price-detail">
                      Hot dog only
                    </Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
                  </Card>
                  <Card className="food-price">
                    <Card.Title className="price-detail">
                      w/ Fries & Drink
                    </Card.Title>
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
              <Card.Body>
                <Card.Title>Nachos Platter</Card.Title>
                <Card.Text>**THIS ITEM IS CURRENTLY UNAVAILABLE**</Card.Text>
                <Card.Text>
                  Add a delicious meat topping. Options include Fajita Chicken
                  or Beef.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text>N/A</Card.Text>
                  </Card>
                </Row>
                <Card.Text>$1.99 + GST per topping</Card.Text>
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
                <Card.Title>Sandwiches</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
                <Card.Title>Wraps</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
                <Card.Title>Veggie / Friut Cups</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
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
                <Card.Title>Salads</Card.Title>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card className="food-price">
                    <Card.Text className="mb-0">$15.95</Card.Text>
                    <Card.Text>+ GST</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
