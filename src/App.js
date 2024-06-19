import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
