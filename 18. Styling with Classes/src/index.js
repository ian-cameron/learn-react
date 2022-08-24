
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

function Header() {
  return (
      <header>
          <nav className="nav">
              <img src="./react-logo.png" alt="logo" />
              <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Cameron development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div className="main">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
          <li>It's a popular library, so I'll be 
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
      <>
          <Header />
          <MainContent />
          <Footer />
      </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);