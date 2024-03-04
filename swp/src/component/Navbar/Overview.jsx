/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Overview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container
      className={`content-container ${isVisible ? "fade-in" : "fade-out"}`}
    >
      <div className="content-item overview-content" style={{ margin: "5%" }}>
        <h1>-- Giới Thiệu --</h1>
        Chào mừng đến với dự án "FPTBooking" - nơi tận hưởng niềm vui tuyệt vời
        của bữa tiệc sinh nhật cho trẻ em! Chúng tôi tự hào cung cấp dịch vụ đặt
        tiệc chuyên nghiệp, tạo ra không gian lý tưởng để các bé yêu có những
        khoảnh khắc đáng nhớ. Từ trang trí độc đáo đến các hoạt động thú vị,
        chúng tôi đảm bảo mọi chi tiết được chăm sóc kỹ lưỡng. Hãy để
        "FPTBooking" giúp bạn biến ước mơ tiệc sinh nhật của con thành hiện
        thực! Overview
      </div>
    </Container>
  );
};

export default Overview;
