import React from "react";
import MovieList from "../components/movies/MovieList";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCart from "../components/movies/MovieCart";
import { IoIosSearch } from "react-icons/io";

const MoviePage = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=5870f3c945af319893fa3a4452cc3991`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="p-10 page-container">
      <div
        className="flex mb-10
      "
      >
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Type here t osearch ..."
          />
        </div>
        <button
          className="p-4
           bg-primary text-white"
        >
          <IoIosSearch />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <MovieCart key={index + 1} item={item} />
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
