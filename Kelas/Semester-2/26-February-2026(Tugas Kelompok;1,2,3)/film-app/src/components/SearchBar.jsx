import { useState, useRef, useCallback, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");
  const timerRef = useRef(null);

  const debouncedSearch = useCallback(
    (text) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onSearch(text);
      }, 500);
    },
    [onSearch]
  );

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    debouncedSearch(text);
  };

  return (
    <div className="search-bar">
      <svg
        className="search-bar__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
