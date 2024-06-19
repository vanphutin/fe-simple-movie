import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_KEY } from "../config";

//https://api.themoviedb.org/3/movie/movie_id?
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/movie_id?${API_KEY}`
  );
  return <div>f</div>;
};

export default MovieDetailsPage;
