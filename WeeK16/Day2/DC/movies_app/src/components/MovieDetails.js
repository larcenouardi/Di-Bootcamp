import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div>Select a movie...</div>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);
