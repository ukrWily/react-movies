import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

export class Main extends React.Component {
  state = {
    movies: [],
  };

  handleSearch = (search = "matrix") => {
    fetch(`https://www.omdbapi.com/?apikey=4a3b711b&s=${search}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  componentDidMount() {
    this.handleSearch();
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="content">
        <Search search={this.handleSearch} />
        {!movies && <div className="center">No movies found</div>}
        {movies && movies.length > 0 ? (
          <Movies movies={movies} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}
