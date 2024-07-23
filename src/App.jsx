import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// const { JSDOM } = require("jsdom");
// const { window } = new JSDOM("");
// const $ = require("jquery")(window);

// import WordTree from "./components/WordTree01.jsx";
import WordTree from "./components/WordTree.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordTree />
  </React.StrictMode>
);

// import React from "react";
// import { render } from "react-dom";

// import { App } from "./App";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
