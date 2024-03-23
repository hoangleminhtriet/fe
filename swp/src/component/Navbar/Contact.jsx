/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <Container c className={`content-container ${isVisible ? "fade-in" : "fade-out"}`}>
      <div className="content-item" style={{ margin: "5%" }}>
        <h1>Contact:</h1>
        <h2>Address: FPT University HCMC Saigon Hi-tech park district </h2>
        <h3>Email: contact@contentionary.com</h3>
        <h4>Phone number: 6477333333</h4>
      </div>
    </Container>
  );
};

export default Contact;
