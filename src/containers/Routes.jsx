import { Route, Switch } from "react-router-dom";
import PageBuilder from "./PageBuilder";
import React from "react";
import Layout from "./Layout";
import { usePagesData } from "./PagesDataContext";


const Routes = () => {
  let pagesData = usePagesData();
  return (
    <Switch>
      <Layout>
        <Route
          exact
          path="/"
          render={() => <PageBuilder {...pagesData.home} />}
        />
        <Route
          path="/about"
          render={() => <PageBuilder {...pagesData.about} />}
        />
        <Route
          path="/contact"
          render={() => <PageBuilder {...pagesData.contact} />}
        />
      </Layout>
    </Switch>
  );
};

export default React.memo(Routes);
