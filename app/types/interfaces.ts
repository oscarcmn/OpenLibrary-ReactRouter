export interface Book {
    key: string;
    title: string;
    author_name?: string[];
    publish_year?: number[];
    ratings_average?: number;
    ratings_count?: number;
    cover_i?: number;
    number_of_pages_median?: number;
  }
  
  export interface BookSearchResponse {
    numFound: number;
    start: number;
    docs: Book[];
  }
  

  //esto es pa cuando clickas en un libro y te lleva a la pagina de detalles
  export interface BookDetails {
    key: string;
    title: string;
    description?: string | { value: string };
    subject_places?: string[];
    subjects?: string[];
    subject_people?: string[];
    covers?: number[];
    first_publish_date?: string;
  }
  
  
