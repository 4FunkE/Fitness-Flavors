import React from "react";
import "./src/app.css"; // Import your global styles
import RenderPages from "./src/components/RenderPages"; // Import the RenderPages component

function App() {
  return (
    <div className="App">
      {/* Render different pages based on the route */}
      <RenderPages />
    </div>
  );
}

export default App;