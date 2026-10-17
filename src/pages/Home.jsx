import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import NewsCard from "../components/NewsCard";
import { fetchNews } from "../api/gnews";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("technology");
  const [category, setCategory] = useState("All");

  const loadNews = async () => {
    try {
      setLoading(true);
      const data = await fetchNews({ query: search, category });
      setArticles(data);
    } catch (err) {
      console.error(err);
      setError("Could not load news. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <SearchBar onSearch={(q) => setSearch(q)} />
      <CategoryFilter selected={category} onSelect={setCategory} />

      {loading && <p className="text-center mt-8">Loading…</p>}
      {error && <p className="text-center text-red-600 mt-8">{error}</p>}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {articles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Home;