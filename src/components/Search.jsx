import { useState } from "react";

export const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const movieSearch = () => {
    if (search.trim() === "") {
      return;
    }
    searchMovies(search, type);
    // this.setState({ search: "" });
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      movieSearch(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.value);
    searchMovies(search, e.target.value);
  };

  return (
    <div className="search-wrapper">
      <div class="row search">
        <div class="input-field col s6">
          <input
            placeholder="Search movie"
            id="input_text"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => handleKey(e)}
          />
          {search.trim() !== "" && (
            <button className="search-button" onClick={movieSearch}>
              Search
            </button>
          )}
        </div>
      </div>

      <form className="typeMovies" onChange={handleFilter}>
        <label>
          <input
            name="type"
            type="radio"
            value="all"
            checked={type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            name="type"
            type="radio"
            value="movie"
            checked={type === "movie"}
          />
          <span>Movie</span>
        </label>
        <label>
          <input
            name="type"
            type="radio"
            value="series"
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </form>
    </div>
  );
};
