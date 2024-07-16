import React from "react";
import { Chart } from "react-google-charts";
import "../App.css";

export const data = [
  ["Phrases"],
  ["feelings you have"],
  ["feeling you're just going to sit there and let me stew on it"],
  ["feeling that only a part of you is acceptable to anybody else"],
  ["feeling that you know what it's like"],
  ["feeling guilty again"],
  ["feeling all right about it"],
  ["feeling more comfortable with the way I live"],
  ["feeling if I could really risk it with Pammy"],
  ["feeling some of that hurt now"],
  ["feeling really nothing left to do"],
  ["feeling really nothing changes at all"],
  ["feeling really nothing changes much"],
  ["feeling really good"],
  ["feeling really not part of it"],
  ["feelings towards you now"],
  ["feelings about me"],
  ["feelings towards you now"],
  ["feelings very deeply"],
  ["feelings are, ah"],
  ["feeling stuff like that"],
];

export const options = {
  wordtree: {
    format: "implicit",
    word: "feeling",
    colors: ["blue", "purple", "green"],
    backgroundColor: "pink",
  },
};

export function WordTree() {
  return (
    <div class="chart-container">
      <Chart
        chartType="WordTree"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default WordTree;
