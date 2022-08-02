import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

const navbarElement = (
    <nav>
        <h1 className="brand">Learn React</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us?!</li>
        </ul>
    </nav> 
)

ReactDOM.render(navbarElement, document.getElementById("root"));
