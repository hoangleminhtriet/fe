import "./index.scss";
import { Card, CardText, Container, ProgressBar } from "react-bootstrap";
import { FiCheckSquare } from "react-icons/fi";

const BookingStep2 = () => {
  return (
    <Container style={{ marginTop: "175px" }}>
      <Card.Title> Plan My Event</Card.Title>
      <Card.Text> Step #2 </Card.Text>
      <CardText>
        <FiCheckSquare /> Pick A Date
      </CardText>
      <Card.Text> Step 2 or 7 </Card.Text>
      <ProgressBar now={(100 / 7) * 2} />
      <Card.Text className="mt-3">
        Pick the desired date for the event from the date picker below. To see
        more dates, click the arrows to change the week, month, or year. Then
        proceed to Select an item below.
      </Card.Text>
      <Card.Text>Select Event Date *</Card.Text>

      <CardText>Choice Date</CardText>

      <CardText className="mt-5">Select an item </CardText>
      <CardText style={{ backgroundColor: "blue" }}>
        Pick an available time that you want to reserve next to the desired
        item, then click Next Step.
      </CardText>
    </Container>
  );
};

export default BookingStep2;
