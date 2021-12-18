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
function MoviePage() {
  const [data, setData] = useState("loading");
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
      <div className=' bg-gray-700'>
        <img
          src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
          alt='backdrop'
          className='w-screen h-screen'
        />

        <div
          className='-translate-y-[50%] h-[576px] flex  flex-shrink-0 ml-[100px]'
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
      </div>
    );
  }
}

export default MoviePage;
