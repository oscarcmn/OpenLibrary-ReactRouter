import { Link } from "react-router";

function TopBar() {
  return (
    <div className="container z-100">
      <nav className="fixed top-0 left-0 w-full bg-[var(--color-soft-yellow)] shadow-md flex justify-between items-center text-black p-4 z-100">
        {/* Logo / Title */}
        <Link
          to=""
          className="flex items-center gap-2 text-2xl font-bold tracking-wide hover:text-green-700 transition"
        >
          <img src="/bookie-logo.png" alt="Bookie Logo" className="w-18" />
        </Link>

        {}
        <ul className="flex space-x-6">
          <li>
            <Link to="/favorites">Favourites</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
