import { useLocation, useNavigate } from "react-router-dom";

const Methods = ({ methods }: { methods: Record<string, string> }) => {
  const navigate = useNavigate();
  const handleOnClick = (method: string) => {
    navigate(`/string${methods[method]}`);
  };
  const location = useLocation();
  return (
    <div className="col-span-2 overflow-y-auto h-screen">
      <ul className="space-y-2">
        {Object.keys(methods).map((method) => (
          <li
            key={method}
            className={`cursor-pointer text-center rounded-md py-2 ${
              method.toLowerCase() === location.search.split("=")[1]
                ? "bg-blue-800 text-white hover:bg-blue-600 transition-all"
                : "bg-blue-500 text-white hover:bg-blue-700 transition-all"
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
