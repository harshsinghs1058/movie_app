import HomePage from "./pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import React from "react";
import NoRoute from "./pages/NoRoute";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/movie/:movieId' element={<MoviePage />} />
          <Route exact path='*' element={<NoRoute />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
