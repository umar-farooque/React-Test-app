import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import Counters from "./Components/counters";

let element = <h1>Hello World</h1>;
console.log(element);
ReactDom.render(<Counters />, document.getElementById("root"));
