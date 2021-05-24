import React, { Suspense } from "react";

const Header = React.lazy(() => import("../components/Header"));
const Carousel = React.lazy(() => import("../components/Carousel"));
const Footer = React.lazy(() => import("../components/Footer"));
const AboutUs = React.lazy(() => import("../components/AboutUs"));
const Faq = React.lazy(() => import("../components/Faq"));

const withSuspenseComponent = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export const registeredComponents = {
  Header: withSuspenseComponent(Header),
  Carousel: withSuspenseComponent(Carousel),
  Footer: withSuspenseComponent(Footer),
  AboutUs: withSuspenseComponent(AboutUs),
  Faq: withSuspenseComponent(Faq),
};