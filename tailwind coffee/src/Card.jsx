import React from 'react'

function Card({ btnText }) {
  console.log(btnText);
  return (
    <>
<div className="flex justify-center">
    <div className="max-w-xs rounded-md shadow-md bg-[#2b2118] text-[#f5eee6]" >
  <img
    src="https://i.pinimg.com/736x/ee/e5/e9/eee5e9b2a092605e3e80663817dc23a4.jpg"
    alt="Freshly brewed coffee"
    className="object-cover object-center w-full rounded-t-md h-72 bg-[#8b7355]"
  />

  <div className="flex flex-col justify-between p-6 space-y-8">
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold tracking-wide">
        Fresh Brew
      </h2>

      <p className="text-[#c8b8a6]">
        Rich, smooth, and freshly brewed coffee made to give you
        the perfect start to your day.
      </p>
    </div>

    <button
      type="button"
      className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#4a3828] text-[#f5eee6]">
      {btnText}
    </button>
  </div>
</div>
</div>
</>
  )
}

export default Card
