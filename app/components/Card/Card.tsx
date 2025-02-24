import type { Book } from "../../types/interfaces";

interface CardProps {
  book: Book;
}

function Card({ book }: CardProps) {
  return (
    <div className="card">
      <img
        alt="pokemon"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}.jpg`}
      />
      <h3>{book.title[0].toUpperCase() + book.title.slice(1)}</h3>
    </div>
  );
}

export default Card;
