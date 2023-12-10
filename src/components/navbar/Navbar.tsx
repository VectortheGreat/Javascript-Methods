import { Link } from "react-router-dom";

const Navbar = () => {
  const pages: { [key: string]: string } = {
    String: "/string",
    Integer: "/integer",
    Array: "/array",
    Date: "/date",
    Json: "/json",
    Math: "/math",
  };
  return (
    <nav className="bg-yellow-300 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" text-xl font-bold">Javascript Methods</div>
          <ul className="flex space-x-4">
            {Object.keys(pages).map((page) => (
              <li key={page} className="text-lg">
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
