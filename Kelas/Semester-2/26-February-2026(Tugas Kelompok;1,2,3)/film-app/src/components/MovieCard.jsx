import { memo } from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <div className="movie-card__poster-wrap">
        {movie.poster_path ? (
          <img
            className="movie-card__poster"
            src={IMG_URL + movie.poster_path}
            alt={movie.title}
            loading="lazy"
          />
        ) : (
          <div className="movie-card__no-image">No Image</div>
        )}
        <div className="movie-card__overlay">
          <span className="movie-card__view">View Details</span>
        </div>
      </div>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__rating">
          <span className="star">★</span> {movie.vote_average?.toFixed(1) || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default memo(MovieCard);
