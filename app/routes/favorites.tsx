import React, { useEffect, useState } from "react";
import type { Book } from "../types/interfaces";
import Card from "../components/Card/Card";

function Favorites() {
  const [favorites, setFavorites] = useState<Book[]>([]);

  // Cargar los favoritos desde el localStorage al montar el componente
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Eliminar un libro de favoritos
  const removeFromFavorites = (book: Book) => {
    const updatedFavorites = favorites.filter((fav) => fav.key !== book.key);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Books</h1>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((book) => (
            <div key={book.key}>
              <Card book={book} onAddToFavorites={() => {}} />
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => removeFromFavorites(book)}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
