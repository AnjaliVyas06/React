import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState("medium");
  const [ice, setIce] = useState("no ice");
  const [sugar, setSugar] = useState("no sugar");
  const [quantity, setQuantity] = useState(1);
  const [drink, setDrink] = useState("");

  const coffeePicker = useCallback(() => {
    let drink =  [
      "Latte",
      "Cappuccino",
      "Mocha",
      "Espresso",
      "Americano",
      "Cold Coffee",
    ];
    let str ="";

    const randomIndex = Math.floor(Math.random() * drink.length);
    const randomDrink = drink[randomIndex];
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

    for (let i = 1; i <= quantity; i++) {
      str += randomDrink + "\n";
    }

    setDrink(str);
  }, [size, ice, sugar, quantity, setDrink]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-gray-800">☕ Coffee Picker</h1>

          <div className="mt-6 text-xl text-gray-700">{drink}</div>

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
