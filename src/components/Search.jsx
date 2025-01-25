import { Component } from "react";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.movieSearch = this.movieSearch.bind(this);
  }

  state = {
    search: "",
  };

  movieSearch = () => {
    if (this.state.search.trim() === "") {
      return;
    }
    this.props.search(this.state.search);
    this.setState({ search: "" });
  };

  handleKey(e) {
    if (e.key === "Enter") {
      this.movieSearch();
    }
  }

  render() {
    return (
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
    );
  }
}
