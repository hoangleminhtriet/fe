import { DatePicker } from "antd";
import "./index.scss";
import { Card, CardText, Container, ProgressBar } from "react-bootstrap";
import { FiCheckSquare } from "react-icons/fi";
import { useState } from "react";

const BookingStep2 = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Container style={{ marginTop: "5em", color: "black" }}>
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
      <DatePicker onChange={handleDateChange} />

      {selectedDate && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Selected Date</Card.Title>
            <Card.Text>{selectedDate.toString()}</Card.Text>
            {/* Add more details or components as needed */}
          </Card.Body>
        </Card>
      )}

      <CardText className="mt-5">Select an item </CardText>
      <CardText style={{ backgroundColor: "silver", maxWidth: "max-content" }}>
        Pick an available time that you want to reserve next to the desired
        item, then click Next Step.
      </CardText>
    </Container>
  );
};

export default BookingStep2;
