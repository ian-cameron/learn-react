import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const content = (
    <div>
        <h2>Thinking</h2>
        <ol>
            <li>Will it compile?</li>
            <li>Append will not replace</li>
        </ol>
    </div>
)

document.getElementById("root").append(content);
document.getElementById("root").append(JSON.stringify(content));

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(content);
