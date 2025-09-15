import "@/assets/tailwind.css";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
const App = () => {
  useEffect(() => {
    console.log("done");
  }, []);
  const [count, setCount] = useState(1);
  const increment = () => setCount((count) => count + 1);

  return (
    <div className="bg-red-700 my-button w-[200px] relative top-[800px]">
      <p>This is React. {count}</p>
      <button className="my-button" onClick={increment}>
        Increment
      </button>

      <Button className="my-button">Done</Button>
    </div>
  );
};

export default App;
