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
  
export interface SearchResponse {
    docs: Book[];
}
  
