
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import Header from "./Header"
import Footie from "./Footer"
import Main from "./Main"

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

function Page() {
  return (
      <>
          <Header />
          <Main />
          <Footie />
      </>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);