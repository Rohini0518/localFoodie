import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="w-full sticky top-0 z-50 bg-green-500 shadow-lg border-b border-green-400 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/landingPage">
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-white to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-green-500 font-bold text-lg lg:text-xl">
                  L
                </span>
              </div>

              <h1 className="hidden lg:block text-xl font-bold text-white">
                Local<span className="text-orange-400">Foodies</span>
              </h1>
            </div>
          </Link>
          <div className="relative flex items-center w-full max-w-[320px] sm:max-w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="
                          w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white
                          text-gray-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent
                          transition-transform duration-200 transform focus:scale-105
                        "
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="md:hidden p-2 rounded-lg hover:bg-green-400 transition-colors duration-200">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="relative">
              <button className="relative p-2 rounded-lg hover:bg-green-400 transition-all duration-200 transform hover:scale-105 group">
                <Link to="/cart">
                  {" "}
                  <div className="relative">
                    <svg
                      className="h-6 w-6 text-white group-hover:text-gray-100 transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    {totalQuantity > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-bounce">
                        {totalQuantity}
                      </span>
                    )}
                  </div>
                </Link>
              </button>
            </div>

            <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-green-500 px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium hidden sm:inline">Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
