import React, { useState, useEffect } from "react";
import {
  getBooksByAnything,
  getBooksByAuthor,
  getBooksByTitle,
} from "../services/openlibraryAPI";
import SearchBox from "../components/SearchBox/SearchBox";
import CardList from "../components/CardList/CardList";
import type { Book } from "../types/interfaces";

function Search() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (search.trim() === "") {
      setBooks([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      try {
        let fetchedBooks: Book[] = [];
        if (filter === "all") {
          fetchedBooks = await getBooksByAnything(search);
        } else if (filter === "author") {
          fetchedBooks = await getBooksByAuthor(search);
        } else if (filter === "title") {
          fetchedBooks = await getBooksByTitle(search);
        }
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching Books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [search, filter]);

  return (
    <div className="flex flex-col items-center justify-center text-white transition-colors duration-500">
      <header className="bg-white dark:bg-gray-700 text-gray-900 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-8">
          Search for a Book
        </h3>
        <SearchBox placeholder="Write a Book name" onSearchChange={setSearch} />
        <div className="flex justify-center gap-4 mt-4">
          <label>
            <input
              type="radio"
              name="filter"
              value="all"
              checked={filter === "all"}
              onChange={() => setFilter("all")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="author"
              checked={filter === "author"}
              onChange={() => setFilter("author")}
            />
            Author
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="title"
              checked={filter === "title"}
              onChange={() => setFilter("title")}
            />
            Title
          </label>
        </div>
        {loading ? (
          <p className="text-gray-500 mt-4">Loading books...</p>
        ) : books.length === 0 ? (
          <p className="text-gray-500 mt-4">No books found.</p>
        ) : (
          <CardList books={books} />
        )}
      </header>
    </div>
  );
}

export default Search;
