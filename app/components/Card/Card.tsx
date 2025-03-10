import type { Book } from "../../types/interfaces";
import BookDetails from "../BookDetails/BookDetails";

interface CardProps {
  book: Book;
  onAddToFavorites: (book: Book) => void; // Función para añadir a favoritos
}

function Card({ book, onAddToFavorites }: CardProps) {
  return (
    <div
      className="card mx-auto font bg-soft-yellow p-6 rounded-lg shadow-lg z-10"
      style={{ width: "18rem" }}
    >
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i || ""}.jpg`}
        className="img-top w-40 h-40 object-contain"
        alt="Book cover"
      />

      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="title font-bold">{book.title || "Unknown Title"}</h5>
          <div>
            <p className="year">
              {book.publish_year ? book.publish_year[0] : "N/A"}
            </p>
          </div>
        </div>
        <div className="d-flex">
          <p className="property">Author</p>
          <p className="dataproperty">
            {book.author_name ? book.author_name : "Unknown"}
          </p>
        </div>
        <div className="d-flex">
          <p className="property">Avg Rating</p>
          <p className="dataproperty">{book.ratings_average || "N/A"}</p>
        </div>
        <div className="d-flex">
          <p className="property">Number of Ratings</p>
          <p className="dataproperty">{book.ratings_count || "N/A"}</p>
        </div>
        <div className="d-flex">
          <p className="property">Number of Pages</p>
          <p className="dataproperty">{book.number_of_pages_median || "N/A"}</p>
        </div>

        {/* Botón para añadir a favoritos */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => onAddToFavorites(book)}
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
}

export default Card;
