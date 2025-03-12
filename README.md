# OpenLibrary (React Router)

## Objectives
OpenLibrary is a web application designed to help users search, browse, and explore books from various categories using the Open Library API. The main goals of this project include:
- Providing an intuitive user interface for book discovery.
- Enabling users to view detailed book information.
- Implementing client-side routing with React Router.
- Ensuring a responsive and seamless browsing experience.

## Features
- Book search functionality with real-time filtering.
- Detailed book information pages.
- Navigation using React Router for a single-page application experience.
- Responsive design for mobile and desktop users.
- Integration with the Open Library API for book data.
- Adding books to a favorites list with local storage.

## Figma Prototype
You can view the prototype here: [Figma Prototype](#)

## Technologies Used
- **React** – Frontend library for building the user interface.
- **React Router** – For client-side routing and navigation.
- **Vite** – Fast development and build tool.
- **TypeScript** – Enhances the project with static typing.
- **Open Library API** – Fetches book data.

## Installation Instructions
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/OpenLibrary.git
   cd OpenLibrary
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the development server**
   ```sh
   npm run dev
   ```
4. **Open in browser**
   - The application should be running at `http://localhost:5173/`

## Usage Guide
- Use the search bar to find books by title, author, or subject.
- Hover over the card and click on the heart button to add a book to favorites.
- Click on the Favorites option in the navbar so you can view your favorited books.
- If you want to remove some book from favorites, you just need to hover over the card of the book and click on the Remove from Favorites button. 
- Click on a book to view more details.
- Navigate using the header links or browser history.

## API Documentation
This project uses the [Open Library API](https://openlibrary.org/developers/api).
### Example API Request:
```sh
GET https://openlibrary.org/search.json?title=the+way+of+kings&fields=key,title,author_name,publish_year,ratings_average,ratings_count,cover_i,number_of_pages_median&language=eng
```
### Response Example:
```json
{
  {
      "author_name": [
        "Brandon Sanderson"
      ],
      "cover_i": 14658316,
      "key": "/works/OL15358691W",
      "number_of_pages_median": 1008,
      "publish_year": [
        2019,
        2020,
        2024,
        2010,
        2011,
        2012,
        2014,
        2015
      ],
      "title": "The Way of Kings",
      "ratings_average": 4.5755396,
      "ratings_count": 139
    },
}
```

## Implementation Notes
- **`app` directory** – Contains React components and pages.
- **`react-router.config.ts`** – Defines the application's routes.
- **`vite.config.ts`** – Configuration for Vite.
- **`Dockerfile`** – Used for building a containerized version of the app.

## Deployed Application
The live version of the application is available here: [Deployed App](https://openlibrary-reactrouter.vercel.app/)

