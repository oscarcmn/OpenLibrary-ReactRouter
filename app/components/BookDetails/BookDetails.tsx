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
      <img src="" alt="" />
      <p>{covers[0] ? covers[0].toString() : "No hay covers disponibles"}</p>
      <p>{bookdetails.description}</p>
      <p>{bookdetails.subject_places}</p>
      <p>{bookdetails.subjects}</p>
      <p>{bookdetails.subject_people}</p>
      <p>{bookdetails.first_publish_date}</p>
    </div>
  );
}

export default BookDetails;
