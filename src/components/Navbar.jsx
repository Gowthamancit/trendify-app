import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="w-full sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Trendify
      </Link>
    </div>
  </nav>
);

export default Navbar;