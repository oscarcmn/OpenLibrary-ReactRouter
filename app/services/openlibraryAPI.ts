const URL_API = "https://openlibrary.org";

//PARA HACER EL BY COVER LE PASO EL COVER, BUSCO POR COVER SI PUEDO, SINO HAY QUE REHACER PARA INCLUIR LAS KEYS
//LE PASO UN FETCH TAL COMO EL LOS OTROS PERO CON LIMITE 1 POR SI ACASO PARA QUE CUADRE EN LA INTEFACE
//HOLA


import type {
    Book,
    BookSearchResponse
} from "../types/interfaces";


//fetch by anything
export async function getBooksByAnything(query: string): Promise<Book[]> {
    const formattedQuery = query.replace(/ /g, "+");
    try {
      const response: Response = await fetch(`${URL_API}/search.json?title=${formattedQuery}&fields=key,title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng`);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Books by anything list: ${response.status} ${response.statusText}`
        );
      }
  
      const data: BookSearchResponse = await response.json();
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
      const response: Response = await fetch(`${URL_API}/search.json?title=${formattedTitle}&fields=key,title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng`);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Books by Title list: ${response.status} ${response.statusText}`
        );
      }
  
      const data: BookSearchResponse = await response.json();
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
      const response: Response = await fetch(`${URL_API}/search.json?title=${formattedAuthor}&fields=key,title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng`);
  
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Books By Author list: ${response.status} ${response.statusText}`
        );
      }
  
      const data: BookSearchResponse = await response.json();
      console.log("Fetched Books By Author list:", data.docs);
      return data.docs;
    } catch (error) {
      console.error("Error fetching Books By Author:", error);
      return []; 
    }
  }



  export async function getBookByKey(key: string): Promise<Book | null> {
    try {
      const response: Response = await fetch(`${URL_API}${key}.json?`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch Book from Cover: ${URL}`);
      }
  
      const book: Book = await response.json();
      console.log("Fetched Book from Cover:", book);
      return book;
    } catch (error) {
      console.error("Error fetching Book by Cover:", error);
      return null;
    }
  }
