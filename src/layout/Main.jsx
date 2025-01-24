import React from "react";
import { Movies } from "../components/Movies";

export class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=4a3b711b&s=matrix")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <h4>What can i find for you?</h4>
        )}
      </main>
    );
  }
}
