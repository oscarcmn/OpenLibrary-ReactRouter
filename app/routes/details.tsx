import { useParams, useLoaderData } from "react-router";
import type { Book } from "../types/interfaces";
import { getBookByCover } from "../services/openlibraryAPI";
import type { Route } from "../+types/root";
import BookDetails from "../components/BookDetails/BookDetails";

// **Loader function for React Router**
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  try {
    // where params.name is part of the URL pokemon:name
    //route("pokemon/:name", "routes/details.tsx"),
    const book: Book | null = await getBookByCover(params.cover_i);
    return { book: book };
  } catch (error) {
    console.error("Error fetching book:", error);
    return { book: null };
  }
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg">Loading Book...</p>
    </div>
  );
}

function Details() {
  // Obtener datos del loader
  const { book } = useLoaderData() as { book: Book | null };

  // if there is no pokemon show an error message
  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <h2 className="text-2xl font-bold">❌ Book Not Found</h2>
      </div>
    );
  }

  return <BookDetails book={book} />;
}

export default Details;
