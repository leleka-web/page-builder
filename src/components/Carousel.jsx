import Carousel from "react-bootstrap/Carousel";
import {  useCallback, useState } from "react";
import React from "react";


const ControlledCarousel= ({ items }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = useCallback(
    (selectedIndex, e) => {
      setIndex(selectedIndex);
    },
    [setIndex]
  );

  return items ? (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items.map(({ src, title, subtitle }) => {
        return (
          <Carousel.Item key={title}>
            <img className="d-block w-100" src={src} />
            <Carousel.Caption>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  ) : null;
};
export default React.memo(ControlledCarousel);
