import { useState } from 'react'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-[#f3eee7] min-h-screen">
      <h1 className='bg-amber-950 p-4 rounded-xl text-white' align="center">Taste of coffee</h1>

      <figure className="md:flexbg-slate-100 rounded-xl p-8 dark:bg-[#f3eee7]">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://i.pinimg.com/736x/f3/56/59/f3565938a74dffad34103837416f664f.jpg"
         alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
         “Coffee is more than just a drink. It’s a moment of comfort,
        a little energy, and a perfect excuse to slow down and enjoy
        the moment.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-amber-800 dark:text-amber-800">
        About Our Coffee
      </div>
      <div className="text-amber-900 dark:text-amber-900">
        Freshly brewed, rich in flavor, made with love.
      </div>
    </figcaption>
  </div>
</figure>
    <Card btnText="More info" />
        <Card btnText="Explore coffee" />

</div>
    </>
  )
}

export default App


