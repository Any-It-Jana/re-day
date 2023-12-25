import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Menu from "./components/organisms/Menu";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Menu />
    </BrowserRouter>
  );
}

export default App;
