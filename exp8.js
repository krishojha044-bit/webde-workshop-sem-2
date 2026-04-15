import React, { useState } from "react";

function exp8() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2"
  };

  const cardStyle = {
    backgroundColor: "#e6e6e6",
    padding: "40px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  };

  const btnStyle = {
    margin: "10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1e90ff",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>React Counter Application</h2>

        <h1>{count}</h1>

        <button style={btnStyle} onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>

        <button style={btnStyle} onClick={() => setCount(count - 1)}>
          Decrement (-)
        </button>

        <br />

        <button style={btnStyle} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default exp8;