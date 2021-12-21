import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import loading_spinner from "./../assets/loading_spinner.gif";
async function getData(pageNo) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNo}`
  );
  return res.data.results;
}
function HomePage() {
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState("loading");
  useEffect(() => {
    getData(pageNo)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, [pageNo]);
  //if data is still loading
  if (data === "loading") {
    return (
      <div className='h-screen flex items-center justify-center bg-gray-700'>
        <img src={loading_spinner} alt='loading' />
      </div>
    );
  }
  //no movie is found
  else if (!data || data.length === 0) {
    return (
      <div className='h-screen flex flex-col items-center justify-center bg-gray-700'>
        <h1 className='text-white text-5xl font-bold'>No Data Found</h1>
        <h3 className='text-white text-2xl'>Please refresh</h3>
      </div>
    );
  }
  return (
    <div className='h-full pb-10 flex flex-col items-center min-h-screen bg-gray-700'>
      <NavBar />
      <div className='flex flex-wrap justify-evenly'>
        {data.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <div className='mt-5 font-bold w-[250px] text-xl'>
        <button
          className='bg-white rounded-full px-4 py-2 mr-2 hover:border-black hover:border-2 hover:font-bold'
          onClick={() => {
            if (pageNo > 1) {
              setData("loading");
              setPageNo(pageNo - 1);
            }
          }}
        >
          Previous
        </button>
        {pageNo}
        <button
          className='bg-white rounded-full px-4 py-2 ml-2 hover:border-black hover:border-2 hover:font-bold'
          onClick={() => {
            if (pageNo < 20) {
              setData("loading");
              setPageNo(pageNo + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomePage;
