import React from "react";
import "./App.css"; // Import your global styles
import RenderPages from "./components/Renderpages"; // Import the RenderPages component

function App() {
  return (
    <div className="App">
      {/* Render different pages based on the route */}
      <RenderPages />
    </div>
  );
}

export default App;
