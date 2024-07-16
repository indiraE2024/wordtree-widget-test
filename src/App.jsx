import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import WordTree from "./components/WordTree01.jsx";
import WordTree02 from "./components/WordTree02.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WordTree />
    <p />
    <WordTree02 />
  </React.StrictMode>
);

// import React from "react";
// import { render } from "react-dom";

// import { App } from "./App";

// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
