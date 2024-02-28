import { Container, Row, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
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
    </>
  );
};

export default Loading;
