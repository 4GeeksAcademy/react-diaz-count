//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter = 0

//render your react application+
setInterval(() => {
    counter = counter+1
    ReactDOM.render(<Home seconds={counter} />, document.querySelector("#app"));
},1)
