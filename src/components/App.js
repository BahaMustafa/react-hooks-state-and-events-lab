import React, { useState } from "react"; // Don't forget to import useState!
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState("light"); // Default to light mode

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const appClass = mode === "dark" ? "App dark" : "App light"; // Conditionally determine the class based on the mode state

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>  {/* Attach the event handler to the button */}
          {mode === "dark" ? "Light Mode" : "Dark Mode"} {/* Change button text based on the mode */}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
