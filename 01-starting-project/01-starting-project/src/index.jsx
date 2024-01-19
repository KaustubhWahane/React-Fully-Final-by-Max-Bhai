import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./index.css";

const render = document.getElementById("root");

// 1st method
// ReactDOM.createRoot(entryPoint).render(<App />);

// 2nd method
// ReactDOM.createRoot(render).render(React.createElement(App));
