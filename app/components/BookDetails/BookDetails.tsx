import React from "react";
import type { BookDetailsInterface } from "../../types/interfaces";

interface BookDetailsProps {
  bookdetails: BookDetailsInterface;
}

function BookDetails({ bookdetails }: BookDetailsProps) {
  const covers = bookdetails.covers || [];
  return (
    <div className="text-black">
      <h1>{bookdetails.title}</h1>
      <img
        src={`https://covers.openlibrary.org/b/id/${covers[0] || ""}.jpg`}
        className="img-top w-40 h-40 object-contain"
        alt="Book cover"
      />
      <p>{bookdetails.description}</p>
    </div>
  );
}

export default BookDetails;
