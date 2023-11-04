import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <button
          className="bg-orange-500 rounded-md p-2 my-2 text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
