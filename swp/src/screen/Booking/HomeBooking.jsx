import { useEffect, useState } from "react";
import "./HomeBooking.css";
import { Container, Row, Spinner } from "react-bootstrap";
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

  return <div>123</div>;
};

export default HomeBooking;
