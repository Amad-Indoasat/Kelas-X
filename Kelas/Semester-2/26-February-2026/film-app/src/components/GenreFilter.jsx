import { memo } from "react";

function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-filter">
      <div className="genre-filter__scroll">
        <button
          className={`genre-pill ${selectedGenre === "" ? "genre-pill--active" : ""}`}
          onClick={() => onSelect("")}
        >
          All
        </button>
        {genres.map((g) => (
          <button
            key={g.id}
            className={`genre-pill ${selectedGenre === g.id ? "genre-pill--active" : ""}`}
            onClick={() => onSelect(g.id)}
          >
            {g.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(GenreFilter);
