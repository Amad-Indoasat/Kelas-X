import { useEffect, useState, useRef, useCallback } from "react";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import SkeletonCard from "./components/SkeletonCard";
import GenreFilter from "./components/GenreFilter";
import SearchBar from "./components/SearchBar";
import "./index.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const loaderRef = useRef(null);
  const queryRef = useRef("");
  const genreRef = useRef("");

  const fetchGenres = async () => {
    try {
      const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
      const data = await res.json();
      setGenres(data.genres || []);
    } catch (err) {
      console.error("Failed to fetch genres:", err);
    }
  };

  const fetchMovies = useCallback(async (pageNum, reset = false) => {
    setLoading(true);

    let url = "";
    const currentQuery = queryRef.current;
    const currentGenre = genreRef.current;

    if (currentQuery.trim()) {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${currentQuery}&page=${pageNum}`;
    } else if (currentGenre) {
      url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${currentGenre}&page=${pageNum}`;
    } else {
      url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${pageNum}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies((prev) =>
        reset ? data.results || [] : [...prev, ...(data.results || [])]
      );
    } catch (err) {
      console.error("Failed to fetch movies:", err);
    }

    setLoading(false);
    setInitialLoad(false);
  }, []);

  // Initial load
  useEffect(() => {
    fetchGenres();
    fetchMovies(1, true);
  }, [fetchMovies]);

  // Infinite scroll
  useEffect(() => {
    if (page > 1) {
      fetchMovies(page, false);
    }
  }, [page, fetchMovies]);

  // Intersection observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const handleSearch = useCallback(
    (text) => {
      queryRef.current = text;
      setQuery(text);
      setPage(1);
      setMovies([]);
      setSelectedGenre("");
      genreRef.current = "";
      fetchMovies(1, true);
    },
    [fetchMovies]
  );

  const handleGenreChange = useCallback(
    (genreId) => {
      genreRef.current = genreId;
      setSelectedGenre(genreId);
      queryRef.current = "";
      setQuery("");
      setPage(1);
      setMovies([]);
      fetchMovies(1, true);
    },
    [fetchMovies]
  );

  const handleCloseModal = useCallback(() => setSelectedMovie(null), []);
  const handleCardClick = useCallback((movie) => setSelectedMovie(movie), []);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-logo">
          <span className="app-logo__icon">🎬</span> Film App
        </h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreChange}
      />

      <main className="movie-grid">
        {initialLoad
          ? Array.from({ length: 20 }).map((_, i) => <SkeletonCard key={i} />)
          : movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onClick={handleCardClick} />
            ))}

        {loading &&
          !initialLoad &&
          Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={`skel-${i}`} />
          ))}
      </main>

      <div ref={loaderRef} className="loader-trigger" />

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}
