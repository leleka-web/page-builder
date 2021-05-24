import { Container } from "react-bootstrap";
import Helmet from "react-helmet";
import React from "react";


const Layout= ({ children }) => {
  return (
    <>
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Container>
        <div className="main">{children}</div>
      </Container>
    </>
  );
};

export default React.memo(Layout);
