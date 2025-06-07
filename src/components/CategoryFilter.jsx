import { categories } from "../utils/categories";

const CategoryFilter = ({ selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-3 py-1 rounded-full border transition text-sm ${
            selected === cat
              ? "bg-indigo-600 text-white border-indigo-600"
              : "bg-transparent border-zinc-400 dark:border-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;