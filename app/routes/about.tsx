import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-white ">
      <div className="bg-white text-gray-900 shadow-lg rounded-4xl p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">
          About the Creators
        </h1>
        <p className="text-lg text-gray-700">
          We are Óscar and Wafae, and we have developed a website that allows
          users to explore and manage books in a simple and efficient way. Our
          website connects to the OpenLibrary API to obtain real-time data on a
          wide variety of books. <br />
          We offer an intuitive and functional interface for searching titles,
          authors, and book properties. One of the main features of our website
          is the advanced search function, which allows users to quickly find
          books based on their title, author, or keywords. <br />
          Additionally, we provide detailed information about each book,
          including the cover, description, and available editions. <br />
          We have also implemented a favorites system that allows users to save
          and manage their preferred books. <br />
          This way, they can easily access them at any time without needing to
          search again. For the development of this website, we have used the
          OpenLibrary API, which enables us to provide up-to-date information in
          real time. <br />
          On the frontend, we have employed ReactRouter, Vite, HTML/CSS, while
          for the backend, we have worked with Node.js. <br />
          Our goal with this project is to facilitate book exploration and
          organization for any user interested in reading. We believe this tool
          will be useful for casual readers as well as researchers and book
          lovers. This website represents a joint effort to improve access to
          literary information. <br />
          We are open to suggestions and improvements to continue evolving the
          project. We hope you enjoy the experience!
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Open_Library_tight_logo.svg/1200px-Open_Library_tight_logo.svg.png"
          alt=""
        />
      </div>
    </div>
  );
}
