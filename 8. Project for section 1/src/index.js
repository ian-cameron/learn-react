/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from "react";
import ReactDOM from "react-dom/client";

const content = (
    <div>
    <img src="logo192.png" width="40"></img>
    <h1>Fun Facts About React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Originally created by Jordan Walke</li>
        <li>Well over 100k stars on Github</li>
        <li>Maintained by Facebook</li>
        <li>Powers thousands of apps</li>
    </ul>
    </div>
        )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
