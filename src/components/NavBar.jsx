import React, { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const [width, setWidth] = useState(window.screen.availWidth);
  window.addEventListener("resize", () => setWidth(window.screen.availWidth));
  return (
    <nav className='text-white flex w-full px-10 pt-3 pb-2 justify-between'>
      <Link to='/'>
        <h1 className='font-bold text-3xl md:text-5xl cursor-pointer'>
          AZ-Movies
        </h1>
      </Link>
      {width > 9000 && (
        <div className='flex '>
          <div className='group'>
            <li
              className='list-none py-2 px-4 rounded-full group-hover:bg-gray-300 group-hover:animate-bounce group-hover:text-black'
              onClick={() => {
                //navigate to route
              }}
            >
              Popular
            </li>
          </div>
          <div className='group'>
            <li
              className='list-none py-2 px-4 rounded-full group-hover:bg-gray-300 group-hover:animate-bounce group-hover:text-black'
              onClick={() => {
                //navigate to route
              }}
            >
              Top rated
            </li>
          </div>
          <div className='group'>
            <li
              className='list-none py-2 px-4 rounded-full group-hover:bg-gray-300 group-hover:animate-bounce group-hover:text-black'
              onClick={() => {
                //navigate to route
              }}
            >
              Trending
            </li>
          </div>
          <div className='group'>
            <li
              className='list-none py-2 px-4 rounded-full group-hover:bg-gray-300 group-hover:animate-bounce group-hover:text-black'
              onClick={() => {
                //navigate to route
              }}
            >
              Now Playing
            </li>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
