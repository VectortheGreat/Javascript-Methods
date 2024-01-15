import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Methods = ({ methods }: { methods: Record<string, string> }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnClick = (method: string) => {
    navigate(`${location.pathname}${methods[method]}`);
  };
  const queryParam = location.search.split("=")[1];
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setPageHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-2 xl:col-span-2 2xl:col-span-2 overflow-y-auto scrollbar-style"
      style={{ maxHeight: `${pageHeight - 150}px` }}
    >
      <ul className="md:flex-col md:space-x-0 md:space-y-2 flex flex-row space-x-2 overflow-x-auto">
        {Object.keys(methods).map((method) => (
          <li
            key={method}
            className={`cursor-pointer text-center rounded-md p-2 mt-2 ${
              method && queryParam && method.toLowerCase() === queryParam.toLowerCase()
                ? "bg-orange-400 text-black hover:bg-yellow-400 transition-all duration-300"
                : "bg-yellow-400 text-black hover:bg-orange-400 transition-all duration-300"
            }`}
            onClick={() => handleOnClick(method)}
          >
            {method}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Methods;
