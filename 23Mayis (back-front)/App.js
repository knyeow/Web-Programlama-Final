import {  BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import Books from "./pages/books";
import Update from "./pages/update";
import "./style.css"

function App() {
  return (
    <div className="app">
   <Router>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;

