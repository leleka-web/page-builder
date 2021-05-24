import { Button, Card, Accordion } from "react-bootstrap";
import React from "react";


const Faq = ({ items }) => {
  return (
    <Accordion defaultActiveKey="0">
      {items.map(({ title, body }) => {
        return (
          <Card key={title}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={title}>
                {title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={title}>
              <Card.Body>{body}</Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
};

export default React.memo(Faq);
