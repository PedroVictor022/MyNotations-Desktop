import { IoMdArrowRoundBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export default function URLBar() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const renderedPath =
    path === "/" ? "@page/login-continue" : `@my-notation-app/app/${path}`;

  const handleBackNavigate = () => {
    if (path !== "/") {
      navigate(-1);
    }
  };

  return (
    <div className="w-full p-4 absolute top-0 gap-4 bg-transparent text-gray-400 rounded-full flex items-center justify-center">
      <div className="w-1/2 bg-zinc-800 rounded-full flex items-center justify-center p-[3px] text-gray-300">
        <p className="text-sm">{renderedPath}</p>
      </div>
      <button className="mt-1 text-xl" onClick={handleBackNavigate}>
        <IoMdArrowRoundBack />
      </button>
    </div>
  );
}
