import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./components/Navbar";

const App = () => (
  <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<ArticlePage />} />
    </Routes>
  </div>
);

export default App;