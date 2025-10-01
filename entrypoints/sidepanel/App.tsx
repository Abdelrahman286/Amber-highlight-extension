import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DevTab from "./components/DevTab";
import MainTab from "./components/MainTab";
const App = () => {
  return (
    <div className="p-2">
      <Tabs defaultValue="main" className="">
        {/* Tab Headers */}
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="main">Main</TabsTrigger>
          <TabsTrigger value="dev">Dev</TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="main">
          <MainTab></MainTab>
        </TabsContent>

        <TabsContent value="dev">
          <DevTab></DevTab>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default App;
