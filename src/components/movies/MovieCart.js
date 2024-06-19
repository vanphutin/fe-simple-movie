import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//5870f3c945af319893fa3a4452cc3991
// https://api.themoviedb.org/3/movie/now_playing?

const MovieCart = ({ item }) => {
  const { title, release_date, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  // console.log(item);
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 h-[470px] select-none">
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-white text-xl font-bold mb-3 h-[56px]">{title}</h3>
      <div className="flex justify-between items-center text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button
        className="py-3 px-6 rounded-lg capitalize bg-primary w-full"
        onClick={() => navigate(`/movie/${id}`)}
      >
        Watch Now
      </button>
    </div>
  );
};

export default MovieCart;
