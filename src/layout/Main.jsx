import { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;
export const Main = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearch = (search = "avatar", type = "all") => {
    setLoading(true);

    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <main className="content">
      <Search searchMovies={handleSearch} />
      {!loading ? <Movies movies={movies} /> : <Preloader />}
    </main>
  );
};
// import React from "react";
// import { Movies } from "../components/Movies";
// import { Preloader } from "../components/Preloader";
// import { Search } from "../components/Search";

// const API_KEY = process.env.REACT_APP_API_KEY;
// export const Main = () => {

//   state = {
//     movies: [],
//     loading: true,
//   };

//   handleSearch = (search = "avatar", type = "all") => {
//     console.log(API_KEY);

//     this.setState({ loading: true });
//     fetch(
//       `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
//         type !== "all" ? `&type=${type}` : ""
//       }`
//     )
//       .then((response) => response.json())
//       .then((data) => this.setState({ movies: data.Search, loading: false }))
//       .catch((err) => {
//         console.error(err);
//         this.setState({ loading: false });
//       });
//   };

//   componentDidMount() {
//     this.handleSearch();
//   }

//   render() {
//     const { movies, loading } = this.state;

//     return (
//       <main className="content">
//         <Search searchMovies={this.handleSearch} handleType={this.handleType} />
//         {!loading ? <Movies movies={movies} /> : <Preloader />}
//       </main>
//     );
//   }
// }
