# WordTree Widget

This is a WordTree widget built with React using Google Charts. It visualizes a given text as a word tree, showcasing the branching relationships between words based on the provided data.

Ideally the rootword of the tree should be called from clicking that exact word appearing in another widget.

The provisional data on the jsx is from a text file in ./public/data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Code Explanation](#code-explanation)
- [Customization](#customization)
- [Useful Links](#resource-links)

## Installation

To use the WordTree widget in your project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/wordtree-widget.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd wordtree-widget
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

## Usage

To use the WordTree component, import and include it in your React application:

```jsx
import React from "react";
import WordTree from "./WordTree";

function App() {
  return (
    <div className="App">
      <h1>WordTree Visualization</h1>
      <WordTree />
    </div>
  );
}

export default App;
```

## Dependencies

This project relies on the following dependencies:

react: ^18.0.0
react-google-charts: ^4.0.0
Ensure these dependencies are added to your package.json:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-google-charts": "^4.0.0"
  }
}
```

## Code Explanation

The main code for the WordTree widget is in the WordTree.jsx file. Here’s a breakdown:

Data: The data to be visualized is defined in the data constant. It’s structured as a 2 dimensional array where the first element is the header, and the second element is the paragraph of text.

```jsx
export const data = [
  ["Phrases"],
  ["You. The module on the inner critic, it's cracked everything open..."],
];
```

Options: The visualization options are defined in the options constant. It includes properties like width, maxFontSize, and settings specific to the WordTree chart.

```jsx
export const options = {
  width: "100%",
  maxFontSize: 25,
  forceIFrame: true,
  wordtree: {
    format: "implicit",
    type: "double",
    word: "feeling",
  },
};
```

WordTree Component: The WordTree component renders the WordTree chart using the Chart component from react-google-charts.

```jsx
export function WordTree() {
  return (
    <div className="chart-container mx-auto">
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
```

## Customisation

You can customise the WordTree widget by modifying the data and options objects. For example, to change the root word of the WordTree:

```jsx
export const options = {
  ...,
  wordtree: {
    ...,
    word: "your-new-root-word",
  },
};
```

To change the colors of the branches:

```jsx
export const options = {
  ...,
  colors: ["steelblue", "purple", "green"],
};
```

## Resource Links

- [Google Charts Documentation](https://developers.google.com/chart/interactive/docs/gallery/wordtree)
- [React Google Charts Examples](https://www.react-google-charts.com/examples/word-tree)
- [Working Example](https://codesandbox.io/s/github/RakanNimer/react-google-charts/tree/master/sandboxes/word-tree/default?from-embed=&file=/App.tsx:0-830)
