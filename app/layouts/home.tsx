import type { Route } from "../+types/root";

import { Link, Outlet } from "react-router";
import TopBar from "../components/TopBar/TopBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OpenLibrary React Router" },
    { name: "description", content: "Made by Oscar and Wafae" },
  ];
}

export default function Home() {
  return (
    <>
      <TopBar />
      {/* Page Content */}
      <div className="pt-24 bg-white min-h-auto">
        {" "}
        {/* Add padding to prevent content from being hidden behind the navbar */}
        {/* Render the child route */}
        <Outlet />
      </div>
    </>
  );
}
