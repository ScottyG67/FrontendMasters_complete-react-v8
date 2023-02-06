import { createRoot } from "react-dom/client";
import Pet from "./Pet"

const App = () => {
  return(
    <div>
      <h1>Adopt ME!</h1>
      <Pet name="Dory" animal="Dog" breed="everything" />
      <Pet name="Lilo" animal="Dog" breed="Aussie" />
      <Pet name="Lacy" animal="Dog" breed="Lab" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
