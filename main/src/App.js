import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import ProductDisplay from "./components/ProductDisplay";
import Main from "./components/Main";
import Dbapp from "./db/dbapp";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="bg-warning">
          <Link to="/Home">Home </Link>
          <br></br>
          <Link to="/Main">Main</Link>
        </nav>

        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dbapp" element={<Dbapp />} />
          <Route path="/products" element={<ProductDisplay />}>
            <Route path=":id,:param2" element={<ProductDisplay />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
