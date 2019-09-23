import React, { Component } from "react";
import WithLoading from "../withLoading/WithLoading";
import "./ListMovies.css";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h1>{movie.name}</h1>
      <img src={movie.image} alt="" />
      <p>{movie.rating}</p>
      <p>{movie.year}</p>
    </div>
  );
};

class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="movies">
        {this.props.movies.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </div>
    );
  }
}

export default WithLoading(ListMovies);
