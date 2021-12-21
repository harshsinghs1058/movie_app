import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import loading_spinner from "./../assets/loading_spinner.gif";
import play_icon from "./../assets/play_icon.png";
import NavBar from "./../components/NavBar";
async function getData(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return res.data;
}
async function getClips(movieId) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return res.data.results;
}
function MoviePage() {
  const { movieId } = useParams();

  //states
  const [data, setData] = useState("loading");
  const [clips, setClips] = useState([]);
  const [width, setWidth] = useState(window.screen.availWidth);
  const navigate = useNavigate();
  let mt = width > 768 ? (width * 9) / 16 - 250 : 0;

  //api calls
  useEffect(() => {
    getData(movieId)
      .then((res) => {
        setData(res);
        if (width > 768) window.scroll({ top: mt - 100, behavior: "smooth" });
      })
      .catch((err) => {
        alert(err);
        navigate("/", { replace: true });
      });
    getClips(movieId)
      .then((res) => {
        setClips(res);
      })
      .catch((err) => {
        alert(err);
        navigate("/", { replace: true });
      });
  }, [movieId, navigate, mt, width]);

  //on resize
  window.addEventListener("resize", () => {
    setWidth(window.screen.availWidth);
  });

  //if data is still loading
  if (data === "loading") {
    return (
      <div className='h-screen flex items-center justify-center md:justify-between bg-gray-700'>
        <img src={loading_spinner} alt='loading' height='200px' width='200px' />
      </div>
    );
  } else {
    return (
      <div className=' bg-gray-700 text-white pb-10'>
        {width > 768 ? (
          <img
            src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
            alt='backdrop'
            className='w-screen aspect-video absolute top-0'
          />
        ) : (
          <NavBar />
        )}
        <div
          className='md:h-[576px] flex flex-col items-center justify-center md:flex-row md:ml-[50px] pt-5 md:pt-0'
          style={{ marginTop: `${mt}px` }}
        >
          <img
            src={"https://image.tmdb.org/t/p/original/" + data.poster_path}
            alt='poster'
            className='rounded-xl border-white border-4 max-w-[min(400px,90%)] sm:max-w-[50%] md:h-[576px] z-10'
          />
          <h1 className='text-white text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-bold z-10 md:ml-4 text-center'>
            {data.title}
          </h1>
        </div>
        <div className='mx-2 sm:mx-5 md:mx-[50px] lg:mx-[100px] mt-5 md:mt-10'>
          {details(data)}
          {ClipsAndTrailers(clips)}
          <div className='font-bold text-xl md:text-2xl lg:text-4xl mt-5 md:mt-10'>
            OverView
            <p className='text-lg md:text-xl font-normal mt-5 md:mt-10'>
              {data.overview}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
function details(data) {
  return (
    <div className='flex flex-col text-lg md:text-xl lg:text-2xl'>
      <div className='flex justify-evenly md:justify-start'>
        {data.genres.map((genre) => (
          <div key={genre.id} className='md:ml-10'>
            {genre.name}
          </div>
        ))}
      </div>
      <div className='ml-10 mt-3'>
        <span className='font-bold'>Release date :- </span>
        {data.release_date}
      </div>
      <div className='ml-10 mt-3'>
        <span className='font-bold'>Rating :- </span>
        {data.vote_average}/10({data.vote_count})
      </div>
      <div className='ml-10 mt-3'>
        <span className='font-bold'>Duration :- </span>
        {parseInt(data.runtime / 60)}:{data.runtime % 60}hr
      </div>
    </div>
  );
}

function ClipsAndTrailers(clips) {
  return (
    <div className='mt-5 md:mt-10 font-bold text-xl md:text-2xl lg:text-4xl '>
      Clips & Trailers
      <div className='flex overflow-scroll scrollbar-hide snap-x mt-5 md:mt-10 cursor-pointer'>
        {clips.map((clip) => {
          return clip.site === "YouTube" ? (
            <div
              className='snap-center relative mr-4'
              key={clip.id}
              onClick={() =>
                window.open(`https://youtube.com/watch?v=${clip.key}`)
              }
            >
              <div className='h-[180px] md:h-[250px] lg:h-[300px] aspect-video flex-shrink-0   rounded-xl max-w-[90%]'>
                <img
                  className='object-cover h-[180px] md:h-[250px] lg:h-[300px] aspect-video rounded-xl absolute'
                  src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg
                                  `}
                  alt='Thumbnail'
                />
                <img
                  src={play_icon}
                  alt='play'
                  className='h-[150px] w-[150px] absolute inset-0 m-auto'
                />
              </div>
              <p className='text-base md:text-lg lg:text-xl font-normal'>
                {clip.name}
              </p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
