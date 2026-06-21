import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../services/api";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookDetails(id);
        setBook(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>

      <p>
        {typeof book.description === "string"
          ? book.description
          : book.description?.value || "No description available"}
      </p>
    </div>
  );
}
