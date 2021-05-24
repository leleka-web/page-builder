import React  from "react";
import { Card } from "react-bootstrap";
const AboutUs = ({ imgSrc, title, body }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default React.memo(AboutUs);
