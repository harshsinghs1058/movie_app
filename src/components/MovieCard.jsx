import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className='w-[min(21rem,90%)] bg-black rounded-xl text-white p-3 m-5 flex flex-col text-xl  hover:scale-110 relative cursor-pointer '>
        {movie.adult && (
          <div className='text-red-700 text-xl font-bold w-10 h-10 bg-green-600 rounded-full absolute top-[75%] left-10 flex justify-center items-center text-center'>
            18+
          </div>
        )}
        <img
          src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
          alt='Movie Poster'
          className='w-full self-center rounded-lg h-[468px]'
        />
        <h3 className='my-1'>
          {movie.name ? movie.name : movie.original_title}
        </h3>
        <h3>⭐ {movie.vote_average} /10</h3>
      </div>
    </Link>
  );
}
MovieCard.propTypes = { movie: PropTypes.object.isRequired };
export default MovieCard;
