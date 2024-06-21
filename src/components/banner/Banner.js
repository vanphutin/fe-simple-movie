import React, { useEffect, useState } from "react";
import { API_KEY, fetcher } from "../../config";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?${API_KEY}`,
    fetcher
  );
  const movies = data?.results || [];
  console.log(movies);
  return (
    <section className="banner mb-10 h-[600px] page-container overflow-hidden">
      <Swiper grabCursor="true " slidesPerView="auto">
        {movies &&
          movies.length > 0 &&
          movies.map((item, index) => (
            <SwiperSlide key={index + 1}>
              <BannerItems item={item}></BannerItems>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItems({ item }) {
  const navigate = useNavigate();
  const { title, release_date, vote_average, poster_path, id } = item;

  return (
    <div className="w-full h-full rounded-lg  relative ">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-full object-top object-cover rounded-lg"
      />
      <div className="conten absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
      </div>
    </div>
  );
}
export default Banner;
