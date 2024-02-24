import { Card, Col, Container, Row } from "react-bootstrap";

export default function FoodScreen() {
  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center" }}>Menu</h1>
        <Row>
          {/*Food1*/}
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#B8E0C8" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza.png"
              />
              <Card.Body>
                <Card.Title>Traditional Pizza</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>

                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#F2BACE" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/traditional-cheese-pizza-1.png"
              />
              <Card.Body>
                <Card.Title>Traditional Pizza</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#E0C258" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/wings.png"
              />
              <Card.Body>
                <Card.Title>Chicken Wings</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Food2 */}
        <Row>
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#B8E0C8" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/tender-fries.png"
              />
              <Card.Body>
                <Card.Title>Chicken Tenders</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#F2BACE" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/hot-dog.png"
              />
              <Card.Body>
                <Card.Title>Hot Dog</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>123</Card.Text>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#E0C258" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/ultimate-nachos-01.png"
              />
              <Card.Body>
                <Card.Title>Nachos Platter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/*Food3*/}
        <Row>
          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#B8E0C8" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/sandwich.png"
              />
              <Card.Body>
                <Card.Title>Sandwiches</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#F2BACE" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/wrap.png"
              />
              <Card.Body>
                <Card.Title>Wraps</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#B8E0C8" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/fruit-plus-veggie.png"
              />
              <Card.Body>
                <Card.Title>Veggie / Friut Cups</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
                  </Card>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col className="m-3" style={{ textAlign: "center" }}>
            <Card style={{ borderRadius: "20px", backgroundColor: "#E0C258" }}>
              <Card.Img
                variant="top"
                src="https://thebigbox.ca/wp-content/uploads/2020/04/salad.png"
              />
              <Card.Body>
                <Card.Title>Salads</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the car content.
                </Card.Text>
                <Row style={{ flexWrap: "nowrap", justifyContent: "center" }}>
                  <Card style={{ width: "10rem" }}>
                    <Card.Title>Card Title</Card.Title>
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
