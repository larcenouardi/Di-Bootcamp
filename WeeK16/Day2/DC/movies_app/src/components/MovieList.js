import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const MovieList = ({ movies, selectMovie }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.title}>
          {movie.title} <button onClick={() => selectMovie(movie)}>Select</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { selectMovie })(MovieList);
