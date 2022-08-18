/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */


import React from "react";
import ReactDOM from "react-dom/client";

function CustomComponent() {
  return (
    <div>
      <nav>
        <img src="./logo.png" width="100" style={{verticalAlign:'middle'}}></img>
        <h1 style={{display:'inline'}}>
          Reasons why I'm excited to learn React
        </h1>
      </nav>
      <ol>
        <li>Its fun</li>
        <li>Its productive</li>
        <li>Its in demand</li>
      </ol>
      <footer>
        &copy; 2022 Cameron Development. All rights reserved.
      </footer>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CustomComponent></CustomComponent>);
