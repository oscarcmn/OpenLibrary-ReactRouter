import React from "react";
import type { Book } from "../../types/interfaces";

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author_name}</p>
    </div>
  );
};

export default BookDetails;
