import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value.trim() || "technology");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2">
      <input
        className="flex-grow px-4 py-2 rounded-xl border outline-none focus:ring focus:ring-indigo-300 dark:bg-zinc-800 dark:border-zinc-700"
        type="search"
        placeholder="Search tech news…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
