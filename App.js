import React from "react";
import Login from "./Login";

function App() {
  return (
    <div>
      <Login />
      <img
        src={`${process.env.PUBLIC_URL}/watermark.png`}
        alt="Watermark"
        className="watermark-img"
        aria-hidden="true"
      />
    </div>
  );
  
}

export default App;