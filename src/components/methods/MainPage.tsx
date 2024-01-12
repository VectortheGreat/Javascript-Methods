import { useLocation } from "react-router-dom";
import StringDetail from "./stringMethods/StringDetail";
import ArrayDetail from "./arrayMethods/ArrayDetail";
import NumberDetail from "./number-methods/NumberDetail";

const MainPage = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="p-8">
      {pathname === "string" ? (
        <StringDetail />
      ) : pathname === "array" ? (
        <ArrayDetail />
      ) : pathname === "number" ? (
        <NumberDetail />
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default MainPage;
