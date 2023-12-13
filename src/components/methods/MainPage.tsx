import { useLocation } from "react-router-dom";
import StringDetail from "./stringMethods/StringDetail";

const MainPage = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="p-8">
      {pathname === "string" ? <StringDetail /> : <h1>Not Found</h1>}
    </div>
  );
};

export default MainPage;
