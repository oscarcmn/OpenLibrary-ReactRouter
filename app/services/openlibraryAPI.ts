const URL_API = "https://openlibrary.org";
import type {
    Book,
    SearchResponse
} from "../types/interfaces";


//fetch by anything
export async function getBooksByAnything(query: string): Promise<Book[]> {
    const formattedQuery = query.replace(/ /g, "+");
    try {
      const response: Response = await fetch(`${URL_API}/search.json?title=${formattedQuery}&fields=title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng`);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Books by anything list: ${response.status} ${response.statusText}`
        );
      }
  
      const data: SearchResponse = await response.json();
      console.log("Fetched Books by anything list:", data.docs);
      return data.docs;
    } catch (error) {
      console.error("Error fetching Books by anything:", error);
      return []; 
    }
  }
  
  //fetch by title
  export async function getBooksByTitle(title: string): Promise<Book[]> {
    const formattedTitle = title.replace(/ /g, "+");
    try {
      const response: Response = await fetch(`${URL_API}/search.json?title=${formattedTitle}&fields=title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng`);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Books by Title list: ${response.status} ${response.statusText}`
        );
      }
  
      const data: SearchResponse = await response.json();
      console.log("Fetched Books by title list:", data.docs);
      return data.docs;
    } catch (error) {
      console.error("Error fetching Books by title:", error);
      return []; 
    }
  }
  
  //fetch by author
  export async function getBooksByAuthor(author: string): Promise<Book[]> {
    const formattedAuthor = author.replace(/ /g, "+");
    try {
      const response: Response = await fetch(`${URL_API}/search.json?title=${formattedAuthor}&fields=title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng`);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Books By Author list: ${response.status} ${response.statusText}`
        );
      }
  
      const data: SearchResponse = await response.json();
      console.log("Fetched Books By Author list:", data.docs);
      return data.docs;
    } catch (error) {
      console.error("Error fetching Books By Author:", error);
      return []; 
    }
  }
