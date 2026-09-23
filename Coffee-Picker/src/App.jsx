import { useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState("medium");
  const [ice, setIce] = useState("no ice");
  const [sugar, setSugar] = useState("no sugar");
  const [quantity, setQuantity] = useState(1);
  const [drink, setDrink] = useState("");
  const drinkRef = useRef(null);

  const coffeePicker = useCallback(() => {
    let drink = [
      "Latte",
      "Cappuccino",
      "Mocha",
      "Espresso",
      "Americano",
      "Cold Coffee",
    ];

    const randomIndex = Math.floor(Math.random() * drink.length);
      const randomDrink = drink[randomIndex];
    let str="";

    str += randomDrink;


    if (size === "small") {
      str += " Small";
    }

    if (size === "medium") {
      str += " Medium";
    }

    if (size === "large") {
      str += " Large";
    }
    if (ice === "ice") {
      str += " Iced";
    } else {
      str += " No Ice";
    }
    if (sugar === "sugar") {
      str += " With Sugar";
    } else {
      str += " No Sugar";
    }
    str +="\n";
  
    setDrink(str);
  }, [size, ice, sugar, quantity, setDrink]);

  const copyToClipboard = useCallback(() => {
    drinkRef.current.select();
    window.navigator.clipboard.writeText(drinkRef.current.innerText);
  }, [drinkRef]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        {/* <div className="bg-white p-8 rounded-2xl shadow-lg text-center"> */}
        <div className="justify-center bg-white w-[500px] p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-gray-800">☕ Coffee Picker</h1>
          <div className="mt-6 flex">
            <input
              type="text"
              value={drink}
              readOnly
              ref={drinkRef}
              className="mt-6 w-full text-xl text-gray-700"
            />

            <button
              onClick={copyToClipboard}
              className="bg-amber-800 text-white px-3 py-1 rounded"
            >
              Copy
            </button>
          </div>
          {/* Size */}
          <div className="mt-6">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Size</span>
              <span className="text-amber-800 font-semibold">{size}</span>
            </div>

            <input
              type="range"
              min="1"
              max="3"
              value={size === "small" ? 1 : size === "medium" ? 2 : 3}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "1") setSize("small");
                if (value === "2") setSize("medium");
                if (value === "3") setSize("large");
              }}
              className="w-full mt-3 accent-amber-800"
            />

            <div className="flex justify-between text-sm text-gray-500">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-6">
            <div>
              <input
                type="checkbox"
                id="ice"
                onChange={() => {
                  setIce(ice === "ice" ? "no ice" : "ice");
                }}
              />
              <label htmlFor="ice" className="ml-2">
                Iced
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="sugar"
                onChange={() => {
                  setSugar(sugar === "sugar" ? "no sugar" : "sugar");
                }}
              />
              <label htmlFor="sugar" className="ml-2">
                Add Sugar
              </label>
            </div>
          </div>

          <button
            onClick={coffeePicker}
            className="mt-6 px-6 py-3 bg-amber-800 text-white rounded-full"
          >
            Pick My Coffee
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
