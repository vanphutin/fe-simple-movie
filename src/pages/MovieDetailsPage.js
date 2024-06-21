import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_KEY, fetcher } from "../config";
import MovieCart from "../components/movies/MovieCart";
import { Swiper, SwiperSlide } from "swiper/react";

//https://api.themoviedb.org/3/movie/movie_id?
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  // console.log(data);
  return (
    <div className="py-10">
      <div className="w-full h-[600px] relative mb-10">
        <div className="absolute inset-0 bg-black bg-opacity-70">
          <div
            className="w-full h-full bg-cover bg-no-repeat z-10
            "
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500/${backdrop_path})`,
            }}
          ></div>
        </div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10pb pb-10">
        <img
          src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-full object-cover z-20 rounded-xl"
        />
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        {title}
      </h1>
      {genres && genres.length > 0 && (
        <div className="flex items-center justify-center gap-x-5 mb-10 ">
          {genres.map((item, index) => (
            <span
              className="py-2 px-4 border-primary text-primary border rounded"
              key={index + 1}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MoviesCredits />
    </div>
  );
};

function MoviesCredits() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?${API_KEY}`,

    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <>
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item, index) => (
          <div className="cast-items" key={index + 1}>
            <img
              src={`http://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
      <MoviesVideo />
    </>
  );
}
function MoviesVideo() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?${API_KEY}`,

    fetcher
  );

  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item, index) => (
          <div key={item.id} className="">
            <h3 className="mb-5 text-xl font-medium p-3 bg-secondary inline-block">
              {item.name}
            </h3>
            <div key={index + 1} className="w-full aspect-video">
              <iframe
                width="715"
                height="402"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <MovieSimilar />
    </div>
  );
}
function MovieSimilar() {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?${API_KEY}`,

    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper grabCursor={true} spaceBetween={30} slidesPerView={"auto"}>
          {results &&
            results.length > 0 &&
            results.map((item, index) => (
              <SwiperSlide key={index + 1}>
                <MovieCart item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
export default MovieDetailsPage;
