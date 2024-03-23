/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Overview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container className={`content-container ${isVisible ? "fade-in" : "fade-out"}`}>
      <div className="content-item overview-content" style={{ margin: "5%" }}>
        <h1>-- Introduction --</h1>
        Welcome to the "Booking birthday for Kids" project - where you can enjoy the fantastic joy of children's
        birthday parties! We pride ourselves on providing professional party booking services, creating an ideal space
        for children to have memorable moments. From unique decorations to fun activities, we ensure that every detail
        is carefully taken care of. Let "BirthdayKids" help you turn your child's birthday party dreams into reality!
        Overview
      </div>
    </Container>
  );
};

export default Overview;
