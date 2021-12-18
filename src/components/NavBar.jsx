import { useState } from "react";
function NavBar() {
  const [width, setWidth] = useState(window.screen.availWidth);
  window.addEventListener("resize", () => setWidth(window.screen.availWidth));
  return (
    <nav className='text-white flex w-full px-10 pt-3 pb-2 justify-between'>
      <h1
        className='font-bold text-5xl cursor-pointer'
        onClick={() => {
          //move to index page
        }}
      >
        AZ-Movies
      </h1>
      {width > 768 ? (
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
      ) : (
        <div class='relative inline-block text-left'>
          <div>
            <button
              type='button'
              class='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
              id='menu-button'
              aria-expanded='true'
              aria-haspopup='true'
            >
              Options
              <svg
                class='-mr-1 ml-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div
            class='origin-top-right absolute right-0 mt-2 pl-4 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
            tabindex='-1'
          >
            <div class='py-1' role='none'>
              <div className='text-black focus:bg-blue-400 hover:bg-blue-400'>
                Popular
              </div>
              <div className='text-black focus:bg-blue-400 hover:bg-blue-400'>
                Trending
              </div>
              <div className='text-black focus:bg-blue-400 hover:bg-blue-400'>
                Now Playing
              </div>
              <div className='text-black focus:bg-blue-400 hover:bg-blue-400'>
                Top rated
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
