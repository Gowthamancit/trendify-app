import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const { title, description, url, image, publishedAt, source } = article;

  return (
    <Link
      to={`/article/${btoa(url)}`}
      state={{ article }}
      className="block rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white dark:bg-zinc-800"
    >
      {image && (
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      )}
      <div className="p-4 space-y-2">
        <span className="text-xs text-zinc-500">{new Date(publishedAt).toLocaleDateString()}</span>
        <h2 className="font-semibold line-clamp-2">{title}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">{description}</p>
        <span className="text-xs italic text-indigo-600">{source.name}</span>
      </div>
    </Link>
  );
};

export default NewsCard;