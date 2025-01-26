import { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.movieSearch = this.movieSearch.bind(this);
  }

  state = {
    search: "",
    type: "all",
  };

  movieSearch = () => {
    if (this.state.search.trim() === "") {
      return;
    }
    this.props.search(this.state.search, this.state.type);
    // this.setState({ search: "" });
  };

  handleKey(e) {
    if (e.key === "Enter") {
      this.movieSearch(this.state.search, this.state.type);
    }
  }

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.value }),
      () => this.props.search(this.state.search, this.state.type)
    );
  };

  render() {
    return (
      <div className="search-wrapper">
        <div class="row search">
          <div class="input-field col s6">
            <input
              placeholder="Search movie"
              id="input_text"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={(e) => this.handleKey(e)}
            />
            {this.state.search.trim() !== "" && (
              <button className="search-button" onClick={this.movieSearch}>
                Search
              </button>
            )}
          </div>
        </div>

        <form className="typeMovies" onChange={this.handleFilter}>
          <label>
            <input
              name="type"
              type="radio"
              value="all"
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="movie"
              checked={this.state.type === "movie"}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              value="series"
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
        </form>
      </div>
    );
  }
}
