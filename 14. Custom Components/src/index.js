/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

import React from "react";
import ReactDOM from "react-dom/client";

function CustomComponent() {
  return (
    <div>
      <h1>
        Reasons why I'm excited to learn React
      </h1>
      <ol>
        <li>Its fun</li>
        <li>Its productive</li>
        <li>Its in demand</li>
      </ol>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CustomComponent></CustomComponent>);
