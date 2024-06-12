import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location.pathname location.pathname location.pathname location.pathname");
  console.log(location.pathname);
  // split metodu, verilen stringi / karakterinden önceki kısım, ortadaki kısım ve sonraki kısım olmak üzere 3'e böler. indis 2 yi istersek örneğin
  // pathname= "/update/6" ise 6 'yı yani book id yi döndürecektir. 
  const bookId = location.pathname.split("/")[2];
  // örneğin path şu şekildeyse localhost:3000/books/5, üçüncü parça 5 rakamını gösterir.
  const handleChange = (e) => {  
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;