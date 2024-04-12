import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const MoviePage = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Favourites = lazy(() => import("./pages/Favourites/Favourites"));
const NewMovie = lazy(() => import("./pages/NewMovie/NewMovie"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MoviePage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movie/new-movie" element={<NewMovie />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}
