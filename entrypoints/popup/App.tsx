import { Button } from "@/components/ui/button";
import { browser } from "wxt/browser";

const App = () => {
  const [error, setError] = useState("");
  const handleOpenOptionsPage = () => {
    try {
      const url = browser.runtime.getURL("/amberOptionsPage.html" as any);
      browser.tabs.create({ url });
    } catch (err) {
      setError(`${err}`);
    }
  };

  return (
    <div className="w-[600px] h-[400px] bg-slate-400 p-4">
      <h1>Amber highlights</h1> <Button>Test</Button>
      <Button variant={"outline"}>Open sidePanel</Button>
      <Button onClick={handleOpenOptionsPage}>Open options page </Button>
      <strong>{error}</strong>
    </div>
  );
};

export default App;
