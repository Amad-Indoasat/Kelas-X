import { useEffect } from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieModal({ movie, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-body">
          {movie.poster_path && (
            <img
              className="modal-poster"
              src={IMG_URL + movie.poster_path}
              alt={movie.title}
            />
          )}
          <div className="modal-details">
            <h2 className="modal-title">{movie.title}</h2>
            <div className="modal-meta">
              <span className="modal-rating">
                <span className="star">★</span> {movie.vote_average?.toFixed(1)}
              </span>
              {movie.release_date && (
                <span className="modal-year">
                  {movie.release_date.slice(0, 4)}
                </span>
              )}
            </div>
            <p className="modal-overview">
              {movie.overview || "No description available."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
