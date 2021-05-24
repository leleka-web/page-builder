import React, { FC } from "react";
import { Nav } from "react-bootstrap";


const Footer = ({ links }) => {
  return links ? (
    <Nav>
      {links.map(({ href, title }) => {
        return (
          <Nav.Item key={title}>
            <Nav.Link href={href}>{title}</Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  ) : null;
};

export default React.memo(Footer);
