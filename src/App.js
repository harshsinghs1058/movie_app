import HomePage from "./pages/HomePage";
import { HashRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/movie/:movieId' element={<MoviePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
