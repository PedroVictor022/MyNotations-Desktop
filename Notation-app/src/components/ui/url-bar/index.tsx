import { IoMdArrowRoundBack, IoIosHome } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export default function URLBar() {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const renderedPath =
    path === "/" ? "@page/login" : `${path}`;

  const handleBackNavigate = () => {
    if (path !== "/") {
      navigate(-1);
    }
  };

  const handleBackToHome = () => {
    if (path === "/home") {
      return;
    }
    navigate("/home");
  };

  return (
    <div className="w-full min-w-[340px] absolute p-4 gap-4 bg-transparent rounded-full flex items-center justify-center ">
      <button
        className="text-gray-600 hover:text-gray-50 text-xl transition-colors"
        onClick={handleBackToHome}
      >
        <IoIosHome />
      </button>
      <div className="w-1/2 bg-zinc-800/60 rounded-full flex items-center justify-center p-[3px] transition-colors">
        <p className="text-sm text-gray-400  hover:text-gray-100">
          {renderedPath}
        </p>
      </div>
      <button
        className="text-gray-600 hover:text-gray-50 text-xl transition-colors"
        onClick={handleBackNavigate}
      >
        <IoMdArrowRoundBack />
      </button>
    </div>
  );
}
