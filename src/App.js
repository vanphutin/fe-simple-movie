import MovieCart from "./components/movies/MovieCart";
import MovieList from "./components/movies/MovieList";

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 py-10 text-white mb-5">
        <span className="active text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner mb-10 h-[400px] page-container">
        <div className="w-full h-full rounded-lg  relative ">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/fsmsy/2019_04_27/avengersendgamepostercloseup.jpg.webp"
            alt="avengers"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="conten absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
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
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium ">
              Watch Now
            </button>
          </div>
        </div>
      </section>
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
