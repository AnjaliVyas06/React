import { useState } from 'react'

function App() {

  const [counter, setCounter]= useState(0);

    // let counter = 17;

    const addValue = () => {
    // setCounter(counter + 1);
    setCounter(prevCounter => prevCounter + 1); //callBacks!
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

    // console.log("Value added", counter);
    }
    const removeValue = () => {
      setCounter(counter -1);
    }

      
    
    return (
      <>
      <h1>Coffee Machine</h1>

      <h2>Coffee Cups : {counter}</h2>

      <button onClick={addValue}>
        Add Coffee {counter}
      </button>

      <br />

      <button onClick={removeValue}>
        Remove Coffee {counter}
      </button>

      <br />

      <p>Available Coffee : {counter}</p>
    </>
    )
}

export default App
