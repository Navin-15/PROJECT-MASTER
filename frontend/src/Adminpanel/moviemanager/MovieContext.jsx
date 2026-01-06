import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  const updateMovie = (index, updatedMovie) => {
    const updated = [...movies];
    updated[index] = updatedMovie;
    setMovies(updated);
  };

  const deleteMovie = (index) => {
    setMovies((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie, updateMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
