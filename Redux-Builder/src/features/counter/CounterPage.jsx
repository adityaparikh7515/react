import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "./counterSlice";

const CounterPage = () => {
  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.counter.value
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Redux Counter
        </h2>

        <h1
          style={{
            fontSize: "60px",
            color: "#007bff",
            marginBottom: "30px",
          }}
        >
          {count}
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => dispatch(increment())}
            style={{
              padding: "12px 20px",
              background: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
          >
            Increment
          </button>

          <button
            onClick={() => dispatch(decrement())}
            style={{
              padding: "12px 20px",
              background: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch(reset())}
            style={{
              padding: "12px 20px",
              background: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;