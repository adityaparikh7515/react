import { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(count = 0)
    }
    return (
        <div className="main-container">
                 <div className="counter">
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
            <button onClick={reset}>Reset</button>
        </div>

    )
}

export default Counter;