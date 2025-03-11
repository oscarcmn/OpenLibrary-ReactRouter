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

## Figma Prototype
You can view the prototype here: [Figma Prototype](#)

## Technologies Used
- **React** – Frontend library for building the user interface.
- **React Router** – For client-side routing and navigation.
- **Vite** – Fast development and build tool.
- **TypeScript** – Enhances the project with static typing.
- **Open Library API** – Fetches book data.
- **Docker** – For containerized deployment.

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
- Click on a book to view more details.
- Navigate using the header links or browser history.

## API Documentation
This project uses the [Open Library API](https://openlibrary.org/developers/api).
### Example API Request:
```sh
GET https://openlibrary.org/search.json?q=harry+potter
```
### Response Example:
```json
{
  "docs": [
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author_name": ["J.K. Rowling"],
      "cover_i": 8095562
    }
  ]
}
```

## Implementation Notes
- **`app` directory** – Contains React components and pages.
- **`react-router.config.ts`** – Defines the application's routes.
- **`vite.config.ts`** – Configuration for Vite.
- **`Dockerfile`** – Used for building a containerized version of the app.

## Deployed Application
The live version of the application is available here: [Deployed App](#)

