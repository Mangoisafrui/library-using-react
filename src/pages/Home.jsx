import { useState, useEffect } from "react";
import { searchBooks } from "../services/api";
import BookCard from "../components/BookCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => { 
      if (query.trim()) {
        handleSearch(query);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setSearched(true);
    try {
      const data = await searchBooks(searchTerm); //
      setBooks(data);
    } catch (err) {                               //
      console.error(err);
    }
    setLoading(false);
  };

 return (
  <div className="container mt-5">
    <h2 className="text-center mb-4">Search Books</h2>

    <div className="d-flex justify-content-center mb-4">
      <input
        value={query}                                     //
        onChange={(e) => setQuery(e.target.value)}
        className="form-control"
        placeholder="Search books..."
      />
    </div>

    {loading && (
      <div className="text-center mt-3">
        <div className="spinner-border text-primary"></div>
      </div>
    )}

    <div className="row g-4 mt-2">
      {books.map((book) => (                   //
        <BookCard key={book.key} book={book} />
      ))}
    </div>

    {searched && !loading && books.length === 0 && (
      <p className="text-center mt-4">No results found</p>
    )}
  </div>
);
}