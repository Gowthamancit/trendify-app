import axios from "axios";

// Base URL for GNews API
const BASE_URL = "https://gnews.io/api/v4";

// Get API key from .env file
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

/**
 * Fetch tech news articles from GNews API.
 *
 * @param {Object} options
 * @param {string} options.query - Search query (default: "technology")
 * @param {string} options.category - Category filter (optional)
 * @param {number} options.max - Maximum number of results (default: 20)
 * @param {number} options.page - Page number for pagination (default: 1)
 * @returns {Promise<Array>} Array of news articles
 */
export const fetchNews = async ({
  query = "technology",
  category = "",
  max = 20,
  page = 1
} = {}) => {
  try {
    // Combine category with search query if category is set
    const q = category && category !== "All" ? `${query} ${category}` : query;

    // Build request URL
    const url = `${BASE_URL}/search?q=${encodeURIComponent(q)}&lang=en&max=${max}&page=${page}&apikey=${API_KEY}`;

    // Optional debug logging
    console.log("Fetching from GNews:", url);

    // Make the GET request
    const { data } = await axios.get(url);

    // Return only articles array
    return data.articles;
  } catch (err) {
    console.error("Failed to fetch news:", err.response?.data || err.message);
    throw err;
  }
};
