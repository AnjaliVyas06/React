import Chai from "./chai"

function App() {

  const username = "Dear Customer"

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">

      <div className="text-center pt-16">

        <h1 className="text-4xl font-bold text-amber-900">
          Good Morning!! {username} ☀️
        </h1>

        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          The morning breeze carried the scent of fresh rain as
          birds chirped softly in the trees. A small café on the
          corner slowly filled with people enjoying warm coffee
          and quiet conversations.
        </p>

      </div>


      <div className="mt-12 flex justify-center">

        <div className="w-80 rounded-xl bg-white p-8 shadow-lg">

          <Chai />

        </div>

      </div>


      <div className="text-center mt-10">

        <button className="rounded-lg bg-amber-800 px-6 py-3 text-white hover:bg-amber-900">
          Order Chai ☕
        </button>

      </div>

    </div>
  )
}

export default App