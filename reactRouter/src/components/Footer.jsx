import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

        <div className="md:flex md:justify-between">

          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-700">
                🍰 Sweet Crumbs
              </h1>
            </Link>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

            {/* Pages */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Pages
              </h2>

              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>

                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Explore
              </h2>

              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/speciality-cakes" className="hover:underline">
                    Speciality Cakes
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Order */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Sweet Crumbs
              </h2>

              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/order" className="hover:underline">
                    Order Online
                  </Link>
                </li>

                <li>
                  <Link to="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        {/* Bottom */}
        <div className="sm:flex sm:items-center sm:justify-between">

          <span className="text-sm text-gray-500 sm:text-center">
            © 2026{" "}
            <Link to="/" className="hover:underline">
              Sweet Crumbs
            </Link>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

            <Link to="#" className="text-gray-500 hover:text-gray-900">
              Instagram
            </Link>

            <Link to="#" className="text-gray-500 hover:text-gray-900">
              GitHub
            </Link>

            <Link to="#" className="text-gray-500 hover:text-gray-900">
              LinkedIn
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}