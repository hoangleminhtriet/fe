import "./index.scss";
import { Card, CardText, Container, ProgressBar } from "react-bootstrap";
import { FiCheckSquare } from "react-icons/fi";
import SelectCategory from "./SelectCategory/SelectCategory";

const Booking = () => {
  return (
    <Container style={{ marginTop: "5em" }}>
      <Card.Title> Plan My Event</Card.Title>
      <Card.Text> Step #1 </Card.Text>
      <CardText>
        <FiCheckSquare /> Select A Category
      </CardText>
      <Card.Text> Step 1 or 7 </Card.Text>
      <ProgressBar now={15} />
      <Card.Text className="mt-3">
        Select an available category from the dropdown below, and then click
        Next Step.
      </Card.Text>
      <Card.Text>* indicates a required field.</Card.Text>
      <Card.Text style={{ fontWeight: "700" }}>Select A Category *</Card.Text>
      <SelectCategory />
    </Container>
  );
};

export default Booking;
