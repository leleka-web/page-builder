import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { withPagesData } from "./containers/PagesDataContext";

const AppWithContext = withPagesData(App);

ReactDOM.render(<AppWithContext />, document.getElementById("root"));
