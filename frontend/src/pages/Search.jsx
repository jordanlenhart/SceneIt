import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "77a22f18008a567c7820ad861f4a5dc7";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(
            query
          )}&api_key=${API_KEY}&language=en-US&page=1`
        );
        const data = await res.json();
        console.log("TMDB response:", data); // 👀 check this in browser devtools
        setResults(data.results || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">
        Showing results for "{query}"
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>No results found.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {results.map((show) => (
          <div
            key={show.id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            {show.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="w-full h-72 object-cover"
              />
            ) : (
              <div className="w-full h-72 bg-gray-600 flex items-center justify-center">
                No Image
              </div>
            )}
            <div className="p-2">
              <h2 className="text-lg font-semibold">{show.name}</h2>
              <p className="text-sm text-gray-400">
                {show.first_air_date
                  ? show.first_air_date.split("-")[0]
                  : "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
