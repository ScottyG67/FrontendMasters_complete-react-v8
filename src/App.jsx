import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt ME!</h1>
    <Pet name="Dory" animal="Dog" breed="Everything" />
    <Pet name="Lilo" animal="Dog" breed="Aussi" />
    <Pet name="Lacy" animal="Dog" breed="Lab" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
