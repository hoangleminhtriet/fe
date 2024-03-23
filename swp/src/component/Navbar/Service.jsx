/* eslint-disable react/no-unescaped-entities */
import { Flex } from "antd";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container className={`content-container ${isVisible ? "fade-in" : "fade-out"}`}>
      <div className="content-item" style={{ margin: "5%" }}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          --- Service ----
        </h1>
        <Flex justify="space-between">
          <div className="service_left">
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Food
            </h2>
            <img
              style={{
                objectFit: "cover",
              }}
              width={200}
              height={100}
              src="https://th.bing.com/th/id/R.a7a7f0bed7879b58d82f8a36d0329c41?rik=BRSxQ8kMLfw6Hg&pid=ImgRaw&r=0"
              alt=""
            />
          </div>
          <div className="service_right">
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Game
            </h2>
            <img
              style={{
                objectFit: "cover",
              }}
              width={180}
              height={180}
              src="https://sukienngoisaolon.com/wp-content/uploads/2022/02/175145009_2923721017869008_3782067275092563030_n.jpg"
              alt=""
            />
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Service;
