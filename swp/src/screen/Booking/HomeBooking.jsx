import { useEffect, useState } from "react";
import "./HomeBooking.css";
import { Card, CardText, Container } from "react-bootstrap";
import { FiCheckSquare } from "react-icons/fi";
import ProgressBarComponent from "../../components/ProgressBar/ProgressBar";
import Loading from "../../components/Loading";

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
    return <Loading />;
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
      <Card.Text>Select A Category *</Card.Text>
    </Container>
  );
};

export default HomeBooking;
