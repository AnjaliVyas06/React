import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('inr')
  const [toCurrency, setToCurrency] = useState('usd')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url('https://i.pinimg.com/1200x/52/3d/a6/523da631b189a7e9d41b137761d5d2fc.jpg')`,
      }}
    >

      <div className="w-full max-w-lg">

        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray drop-shadow-lg">
            Currency Converter
          </h1>

          <p className="text-black/80 mt-2">
            Convert your currency quickly and easily
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6">

          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >

            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>
                  setFromCurrency(currency)
                }
                selectCurrency={fromCurrency}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative flex justify-center my-2">

              <button
                type="button"
                onClick={swap}
                className="z-10 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold px-4 py-2 rounded-full shadow-md transition"
              >
                ⇅ Swap
              </button>

            </div>

            <div className="w-full mt-4 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) =>
                  setToCurrency(currency)
                }
                selectCurrency={toCurrency}
                amountDisable
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
              Convert {fromCurrency.toUpperCase()} → {toCurrency.toUpperCase()}
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default App