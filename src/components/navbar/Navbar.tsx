import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pages: { [key: string]: string } = {
    String: "/string",
    Number: "/number",
    Array: "/array",
    Date: "/date",
    Math: "/math",
  };
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="bg-yellow-400 p-4 text-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Link to={"/"} className="text-xl font-bold cursor-pointer mb-4 lg:mb-0">
            Javascript Methods
          </Link>
          <ul className="flex space-x-2 lg:space-x-5">
            {Object.keys(pages).map((page) => (
              <li
                key={page}
                className={`text-lg p-1 lg:hover:bg-yellow-600 lg:hover:rounded-md duration-300 ${
                  pathname === pages[page] ? "border-b-2 border-black font-bold" : ""
                }`}
              >
                <Link to={pages[page]}>{page}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
