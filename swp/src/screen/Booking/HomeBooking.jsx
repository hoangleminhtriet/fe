import { useEffect, useState } from "react";
import "./HomeBooking.css";
import { Card, CardText, Container, Row, Spinner } from "react-bootstrap";
import { FiCheckSquare } from "react-icons/fi";
import ProgressBarComponent from "../../components/ProgressBar/ProgressBar";
import SelectCategory from "./SelectCategory/SelectCategory";

const HomeBooking = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Change the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ minHeight: "100%" }}
        >
          <Spinner className="loading" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Card.Title> Plan My Event</Card.Title>
      <Card.Text> Step #1 </Card.Text>
      <CardText>
        <FiCheckSquare /> Select A Category
      </CardText>
      <Card.Text> Step 1 or 7 </Card.Text>
      <ProgressBarComponent />
      <Card.Text className="mt-3">
        Select an available category from the dropdown below, and then click
        Next Step.
      </Card.Text>
      <Card.Text>* indicates a required field.</Card.Text>
      <Card.Text style={{fontWeight:"700"}}>Select A Category *</Card.Text>
      <SelectCategory/>
    </Container>
  );
};

export default HomeBooking;
