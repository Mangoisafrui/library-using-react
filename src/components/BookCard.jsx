import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const id = book.key.replace("/works/", "");

  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm book-card">
        <img
          className="card-img-top book-img"
          src={
            book.cover_i                    //
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/150"
          }
          alt={book.title || "Book cover"}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{book.title}</h6>    //
          <p className="text-muted small">
            {book.author_name?.[0] || "Unknown Author"}
          </p>

          <Link
            to={`/book/${id}`}
            className="btn btn-outline-primary mt-auto"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}