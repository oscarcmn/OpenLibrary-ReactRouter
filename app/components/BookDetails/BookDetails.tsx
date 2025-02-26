import React from "react";
import type { BookDetailsInterface } from "../../types/interfaces";

interface BookDetailsProps {
  bookdetails: BookDetailsInterface;
}

function BookDetails({ bookdetails }: BookDetailsProps) {
  return (
    <div>
      <h1>{bookdetails.title}</h1>
      <p>{bookdetails.covers}</p>
      <p>{bookdetails.description}</p>
      <p>{bookdetails.subject_places}</p>
      <p>{bookdetails.subjects}</p>
      <p>{bookdetails.subject_people}</p>
      <p>{bookdetails.first_publish_date}</p>
    </div>
  );
}

export default BookDetails;
