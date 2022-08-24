/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
      <header>
          <nav>
              <img src="./react-logo.png" width="40px" />
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
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
          <li>It's a popular library, so I'll be 
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </>
  )
}

function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);