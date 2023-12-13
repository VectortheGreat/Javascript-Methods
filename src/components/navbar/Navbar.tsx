import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pages: { [key: string]: string } = {
    String: "/string",
    Integer: "/integer",
    Array: "/array",
    Date: "/date",
    Json: "/json",
    Math: "/math",
  };
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="bg-yellow-300 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" text-xl font-bold">Javascript Methods</div>
          <ul className="flex space-x-5">
            {Object.keys(pages).map((page) =>
              pathname === pages[page] ? (
                <li
                  key={page}
                  className="text-lg border-b-2 border-black font-bold p-1"
                >
                  <Link to={pages[page]}>{page}</Link>
                </li>
              ) : (
                <li
                  key={page}
                  className="text-lg p-1 hover:bg-yellow-400 hover:rounded-md"
                >
                  <Link to={pages[page]}>{page}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
