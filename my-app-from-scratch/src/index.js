import ReactDOM from "react-dom/client";
import React from "react";

const App = () => {
 return <h1>This is my React app!</h1>;
 }

const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<App></App>)

//ReactDOM.render(<App />, document.getElementById("app"));
