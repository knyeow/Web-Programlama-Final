import { BrowserRouter as Router, Link, Outlet,Routes, Route } from "react-router-dom";
import "./App1.css";
import Home from "./components/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ProductDisplay from "./components/products/ProductDisplay";
import ListProducts from "./components/products/ListProducts";

function App() {
  return (
    <Router>
      <nav> 
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        {/*Burada products route'u parent konumundadır. 
        Çünkü 4 child route'u var  */}
        {/* Parent route demek üstte hep Products sayfasını 
        render etmek istiyoruz demektir*/}  
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          {/* Aşağıdaki değişkene id ismini verdiysek
           ProductDisplay dosyasında bu değişkene yine id ismiyle erişiriz*/} 
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes> 
      
    </Router>
  );
}

export default App;