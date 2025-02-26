import type { Book } from "../../types/interfaces";

interface CardProps {
  book: Book;
}


function Card({ book }: CardProps) {
  return (
    <div className="card mx-auto font" style={{width: "18rem"}}>

      <img src={`https://covers.openlibrary.org/b/id/${book.cover_i || ""}.jpg`}
            className="img-top"
            alt="Book cover"/>
               
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="title">{book.title || "Unknown Title"}</h5>
                        <div>
                            <p className="year">{
                              book.publish_year ? book.publish_year[0] : "N/A"
                            }</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <p className="property">Author</p>
                        <p className="dataproperty">{
                          book.author_name ? book.author_name : "Unknown"
                        }</p>
                    </div>
                    <div className="d-flex">
                        <p className="property">Avg Rating</p>
                        <p className="dataproperty">{
                          book.ratings_average || "N/A"
                        }</p>
                    </div>
                    <div className="d-flex">
                        <p className="property">Number of Ratings</p>
                        <p className="dataproperty">{
                          book.ratings_count || "N/A"
                        }</p>
                    </div>
                    <div className="d-flex">
                        <p className="property">Number of Pages</p>
                        <p className="dataproperty">${
                          book.number_of_pages_median || "N/A"
                        }</p>
                    </div>
                </div>
            </div>
  );
}

export default Card;
