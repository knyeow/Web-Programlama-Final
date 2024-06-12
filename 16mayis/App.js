import { BrowserRouter as Router, Link, Outlet,Routes, Route } from "react-router-dom";
import Home from "./users/Home";
import Create from "./users/Create";
import Update from "./users/Update";


function App() {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />}>
             </Route>
      </Routes> 
      
    </Router>
  );
}

export default App;