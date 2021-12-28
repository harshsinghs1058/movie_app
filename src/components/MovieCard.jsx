import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div
      className='w-[min(21rem,90%)] bg-black rounded-xl text-white p-3 flex flex-col text-xl  hover:scale-110 relative cursor-pointer my-5'
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {movie.adult && (
        <div className='text-red-700 font-bold w-10 h-10 bg-green-600 rounded-full absolute top-[75%] left-10 flex justify-center items-center text-center'>
          18+
        </div>
      )}
      <img
        src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
        alt='Movie Poster'
        className='w-full self-center rounded-lg h-[468px] aspect-[2/3]'
      />
      <h3 className='my-1 break-all'>
        {movie.title.toString().substr(0, movie.title.length > 30 ? 27 : 30) +
          (movie.title.length > 27 ? "..." : "")}
      </h3>
      <h3>⭐ {movie.vote_average} /10</h3>
    </div>
  );
}
MovieCard.propTypes = { movie: PropTypes.object.isRequired };
export default MovieCard;
