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
      className="col-span-2 overflow-y-auto scrollbar-style"
      style={{ maxHeight: `${pageHeight - 150}px` }}
    >
      <ul className="space-y-2">
        {Object.keys(methods).map((method) => (
          <li
            key={method}
            className={`cursor-pointer text-center rounded-md py-2 ${
              method &&
              queryParam &&
              method.toLowerCase() === queryParam.toLowerCase()
                ? "bg-orange-400 text-black hover:bg-yellow-400 transition-all"
                : "bg-yellow-400 text-black hover:bg-orange-400 transition-all"
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
