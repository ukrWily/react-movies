import { Movie } from "./Movie";

export function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies && movies.length > 0 ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4 className="center">Movies not found</h4>
      )}
    </div>
  );
}
