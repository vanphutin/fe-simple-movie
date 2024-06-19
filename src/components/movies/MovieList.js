import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCart from "./MovieCart";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=5870f3c945af319893fa3a4452cc3991`,
    fetcher
  );
  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  //   console.log(movies);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={30} slidesPerView={"auto"}>
        {movies &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <SwiperSlide key={index + 1}>
              <MovieCart item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
