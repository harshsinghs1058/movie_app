import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import loading_spinner from "./../assets/loading_spinner.gif";
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
  const [data, setData] = useState("loading");
  const [clips, setClips] = useState([]);
  const navigate = useNavigate();
  const { movieId } = useParams();
  useEffect(() => {
    getData(movieId)
      .then((res) => {
        setData(res);
        window.scroll({ top: 370, behavior: "smooth" });
      })
      .catch((err) => {
        alert(err);
        navigate("/", { replace: true });
      });
    getClips(movieId)
      .then((res) => {
        setClips(res);
        console.log(res);
      })
      .catch((err) => {
        alert(err);
        navigate("/", { replace: true });
      });
  }, [movieId, navigate]);
  //if data is still loading
  if (data === "loading") {
    return (
      <div className='h-screen flex items-center justify-center bg-gray-700'>
        <img src={loading_spinner} alt='loading' height='200px' width='200px' />
      </div>
    );
  } else {
    return (
      <div className=' bg-gray-700 text-white'>
        <img
          src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
          alt='backdrop'
          className='w-screen h-screen'
        />

        <div
          className='absolute bottom-[-288px] h-[576px] flex  flex-shrink-0 ml-[100px]'
          id='poster'
        >
          <img
            src={"https://image.tmdb.org/t/p/original/" + data.poster_path}
            alt='backdrop'
            className='rounded-xl border-white border-4'
          />
          <h1 className='text-white text-6xl mt-[288px] font-bold ml-10'>
            {data.title}
          </h1>
        </div>
        <div className='mx-[100px] mt-[328px] font-bold text-4xl'>
          Clips & Trailers
          <div className='flex overflow-scroll scrollbar-hide snap-x mt-10'>
            {clips.map((clip) => {
              return clip.site === "YouTube" ? (
                <div
                  key={clip.id}
                  className='snap-center h-[300px] aspect-video flex-shrink-0 mx-2 relative cursor-pointer rounded-xl'
                  onClick={() =>
                    window.open(`https://youtube.com/watch?v=${clip.key}`)
                  }
                >
                  <img
                    className='object-cover h-[300px] aspect-video rounded-xl absolute'
                    src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg
                                `}
                    alt='Thumbnail'
                  />
                </div>
              ) : null;
            })}
          </div>
        </div>
        <p className=' mx-[100px] text-xl '>{data.overview}</p>
      </div>
    );
  }
}

export default MoviePage;
