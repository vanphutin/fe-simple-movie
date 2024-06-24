import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";

const MovieCart = ({ item }) => {
  const { title, release_date, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  // console.log(item);
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800 h-[470px] select-none">
      <img
        src={`${tmdbAPI.imageOriginal(poster_path)}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <h3 className="text-white text-xl font-bold mb-3 h-[56px]">{title}</h3>
      <div className="flex justify-between items-center text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <Button bgColor="secondary" full onClick={() => navigate(`/movie/${id}`)}>
        Watch Now
      </Button>
    </div>
  );
};

export default MovieCart;
