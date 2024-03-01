/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Discount = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container
      className={`content-container ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <div className="content-item" style={{ margin: "5%" }}>
        <h1>--Khuyến Mãi--</h1>
        Để góp phần vào từng dấu ấn đầu đời của con yêu, FPTBooking MIỄN PHÍ
        hoàn toàn giá vé vào cổng cho các bé sơ sinh có chiều cao dưới 70cm
      </div>
    </Container>
  );
};

export default Discount;
