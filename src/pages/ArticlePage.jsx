import { useLocation, useParams, Navigate } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams(); // base64‑encoded article URL
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    // Fallback: redirect to external article if state lost (e.g., page refresh)
    try {
      const url = atob(id);
      window.location.replace(url);
      return null;
    } catch {
      return <Navigate to="/" replace />;
    }
  }

  const { title, url, image, content, description, publishedAt, source } = article;

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-zinc-500 mb-4">
        {new Date(publishedAt).toLocaleString()} • {source.name}
      </p>
      {image && <img src={image} alt={title} className="w-full rounded-xl mb-6" />}
      <p className="mb-6 text-lg leading-relaxed">{content || description}</p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        Read Full Article ↗
      </a>
    </article>
  );
};

export default ArticlePage;