import React from "react";
import { useContext } from "react";
import pagesData from "../fake/pagesData.json";


const PagesData = React.createContext(pagesData);

export const withPagesData =
  (Component) =>
  (props) => {
    return (
      <PagesData.Provider value={pagesData}>
        <Component {...props} />
      </PagesData.Provider>
    );
  };

export const usePagesData = () => {
  return useContext(PagesData);
};
