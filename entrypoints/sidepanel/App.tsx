import React, { useEffect, useState } from "react";
import { db } from "../src/db";
import { Websites } from "../content/type";
import { Button } from "@/components/ui/button";

const App = () => {
  const [websites, setWebsites] = useState<Websites[]>([]);

  // Function to load websites
  const loadWebsites = () => {
    db.websites
      .toArray()
      .then((data) => {
        setWebsites(data);
      })
      .catch((err) => {
        console.error("Error loading websites:", err);
      });
  };

  // Load websites when component mounts
  useEffect(() => {
    loadWebsites();
  }, []);

  return (
    <div>
      <h1>Dummy websites</h1>
      <h2>heheheh</h2>
      <Button onClick={loadWebsites}>Refresh</Button>
      <ul>
        {websites.map((site) => (
          <li key={site.id}>
            <strong>{site.url}</strong> <br />
            Created At: {site.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
