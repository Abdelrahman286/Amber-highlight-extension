import { Tree } from "react-arborist";
import ActionsBoxContent from "./Test";
const data = [
  { id: "1", name: "Testingggggg  dfds" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Chat Rooms",
    children: [
      { id: "c1", name: "General" },
      { id: "c2", name: "Random" },
      { id: "c3", name: "Open Source Projects" },
    ],
  },
  {
    id: "4",
    name: "Direct Messages",
    children: [
      { id: "d1", name: "Alice" },
      { id: "d2", name: "Bob" },
      { id: "d3", name: "Charlie" },
    ],
  },
];
const App = () => {
  return (
    <div>
      {/* <Tree initialData={data} /> */}
      <div className="w-[250px] h-[200px] m-7">
        <ActionsBoxContent></ActionsBoxContent>
      </div>
    </div>
  );
};

export default App;
