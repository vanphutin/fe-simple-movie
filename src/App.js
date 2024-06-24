import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import Banner from "./components/banner/Banner";

// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </>
  );
}

export default App;
