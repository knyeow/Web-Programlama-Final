
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Books = () => {
  const [books, setBooks] = useState([]);
  // Books componenti her çağrıldığında useEffect çalışır.
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);  
      }

    
    };
    fetchAllBooks();
  }, []); // Köşeli parantez boş old. için sadece ilk render'da çalışır.

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      // eğer hata yoksa, sayfayı refresh etmek için reload fonksiyonunu çağırırız
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div >
      <h1 className="hstyle">Book Shop</h1>
      <div className="books">
        {/*books dizisindeki herbir kitap için arrow function çağrılıp book parametresi gönderiliyor.*/}
         {/*Key attribute'u dizi içindeki elemanlara stable kimlik vermek için kullanılır*/}
        {books.map((book) => (
          <div key={book.id} className="book"> {/*elemanlar içinde unique bir değer bulunmalıdır. Bu deger Id old için key=id verilir*/}
            
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;