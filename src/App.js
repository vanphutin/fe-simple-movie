import Banner from "./components/banner/Banner";
import MovieCart from "./components/movies/MovieCart";
import MovieList from "./components/movies/MovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-5">
        <span className="active text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner />
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold ">
          Now Playing
        </h2>
        <MovieList />
      </section>

      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold ">
          Top rated
        </h2>
        <MovieList type="top_rated" />
      </section>

      <section className="movies-layout page-container pb-10">
        <h2 className="capitalize text-white mb-5 text-3xl font-bold ">
          Trending
        </h2>
        <MovieList type="popular" />
      </section>
    </>
  );
}

export default App;
