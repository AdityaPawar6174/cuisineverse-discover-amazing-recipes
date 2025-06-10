import { NavLink } from "react-router-dom";

const Navbar = ({ searchHandler, searchQuery, setSearchQuery, searchField, savedItems }) => {
  return (
    <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold italic lowercase tracking-wide">
          cuisine<span className="text-rose-500">verse</span>
        </h1>

        {/* Search Bar */}
        <form
          onSubmit={searchHandler}
          className="w-full max-w-md lg:max-w-lg flex justify-center"
        >
          <input
            ref={searchField}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipe..."
            required
            className="w-full bg-white p-3 pl-5 pr-10 rounded-full outline-none shadow-md focus:ring-2 focus:ring-rose-400 transition-all duration-300"
          />
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center text-base font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 outline-none ${
                  isActive ? "text-rose-500 font-semibold" : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `relative transition-colors duration-300 outline-none ${
                  isActive ? "text-rose-500 font-semibold" : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              Favourites
              <span className="ml-1 text-sky-500 font-semibold">
                ({savedItems.length})
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
