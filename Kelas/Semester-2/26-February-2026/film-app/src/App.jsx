import { useEffect, useState, useRef } from "react";
import "./index.css";

const modalStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  background: "#222",
  padding: "20px",
  borderRadius: "12px",
  maxWidth: "900px",
  width: "95%",
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
};

const API_KEY = "e03c3cf16754d413c96aa3eddd746211";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const loaderRef = useRef(null);

  const fetchGenres = async () => {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await res.json();
    setGenres(data.genres || []);
  };

  const fetchMovies = async (reset = false) => {
    if (loading) return;
    setLoading(true);

    let url = "";

    if (query.trim()) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    } else if (selectedGenre) {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}&page=${page}`;
    } else {
      url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    setMovies(prev => reset ? (data.results || []) : [...prev, ...(data.results || [])]);
    setLoading(false);
  };

  const searchMovies = () => {
    setPage(1);
    setMovies([]);
    fetchMovies(true);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchMovies(page === 1);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !loading) {
        setPage(prev => prev + 1);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    setQuery("");
    setPage(1);
    setMovies([]);
    setTimeout(() => fetchMovies(true), 0);
  };

  return (
    <div className="container">
      <h1>Film App</h1>

      <div className="search-box">
        <input
          placeholder="Cari film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchMovies()}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="genre-filter">
        <button onClick={() => handleGenreChange("")}>All</button>
        {genres.map(g => (
          <button key={g.id} onClick={() => handleGenreChange(g.id)}>
            {g.name}
          </button>
        ))}
      </div>

      <div className="movies">
        {movies.map(movie => (
          <div key={movie.id} className="movie" onClick={() => setSelectedMovie(movie)}>
            {movie.poster_path ? (
              <img src={IMG_URL + movie.poster_path} alt={movie.title} />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</p>
          </div>
        ))}

        {loading && Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="skeleton" />
        ))}
      </div>

      <div ref={loaderRef} className="loader-trigger" />

      {selectedMovie && (
        <div style={modalStyle} onClick={() => setSelectedMovie(null)}>
          <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
            <h2>{selectedMovie.title}</h2>
            {selectedMovie.poster_path && (
              <img src={IMG_URL + selectedMovie.poster_path} alt={selectedMovie.title} />
            )}
            <p>{selectedMovie.overview || "No description"}</p>
            <p>⭐ {selectedMovie.vote_average?.toFixed(1)}</p>
            <button onClick={() => setSelectedMovie(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
