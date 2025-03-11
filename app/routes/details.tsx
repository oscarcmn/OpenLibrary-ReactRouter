import { useParams, useLoaderData } from "react-router";
import type { BookDetailsInterface } from "../types/interfaces";
import { getBookByKey } from "../services/openlibraryAPI";
import type { Route } from "../+types/root";
import BookDetails from "../components/BookDetails/BookDetails";

// **Loader function for React Router**
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  try {
    if (!params.key) {
      console.error("key is missing in URL params");
      return { book: null };
    }
    const decodedKey = decodeURIComponent(params.key); // Decodifica la key
    console.log("Fetching book with key:", decodedKey); // Depuración
    const bookdetails: BookDetailsInterface | null = await getBookByKey(
      decodedKey
    );
    return { bookdetails: bookdetails };
  } catch (error) {
    console.error("Error fetching book:", error);
    return { bookdetails: null };
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
  const { bookdetails } = useLoaderData() as {
    bookdetails: BookDetailsInterface | null;
  };

  // if there is no pokemon show an error message
  if (!bookdetails) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600">
        <h2 className="text-2xl font-bold">❌ Book Not Found</h2>
      </div>
    );
  }

  return <BookDetails bookdetails={bookdetails} />;
}

export default Details;