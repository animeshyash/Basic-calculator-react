import { Calculator } from "./Components/Calculator";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Calculator />
    </div>
  );
}

export default App;
