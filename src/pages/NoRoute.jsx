import { useNavigate } from "react-router-dom";
import { useState } from "react";
function NoRoute() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);
  setTimeout(() => {
    setTime(time - 1);
    if (time === 0) {
      clearTimeout();
      navigate("/", { replace: true });
    }
  }, 1000);
  return (
    <div className='bg-gray-700 h-screen text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold flex items-center justify-center flex-col text-red-600 text-center'>
      <h1>404</h1>
      <h1 className='mt-2 mb-4'>Page Not Found</h1>
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white'>
        Redirecting to HomePage in {time}
      </h1>
    </div>
  );
}
export default NoRoute;
