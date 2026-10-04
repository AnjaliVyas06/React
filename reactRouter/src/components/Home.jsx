import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">

      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">

        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">

          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">

            <h2 className="text-4xl font-bold sm:text-5xl">
              Freshly Baked
              <span className="hidden sm:block text-4xl">
                Happiness 🍰
              </span>
            </h2>

            <p className="text-lg text-gray-600">
              Delicious cakes, cupcakes, and sweet moments made with love.
            </p>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/products"
            >
              Explore Our Menu
            </Link>

          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img
            className="w-96"
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
            alt="Delicious cake"
          />
        </div>

      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
          alt="Sweet Crumbs cake"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Welcome to Sweet Crumbs 🍰
      </h1>

    </div>
  );
}