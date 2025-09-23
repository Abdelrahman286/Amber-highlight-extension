import { db } from "./db";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect, FormEvent } from "react";

import { generateFakeUsers } from "./fakerFunction";

const UniversalActions = ({ fetchUsers }: { fetchUsers: () => void }) => {
  const [addLoading, setAddLoading] = useState(false);
  const [randomRecordsCount, setRandomRecordsCount] = useState(100);
  const [count, setCount] = useState<number>(0);

  async function addBulkUsers() {
    const fakeUsers = generateFakeUsers(randomRecordsCount);
    setAddLoading(true);
    await db.users.bulkAdd(fakeUsers);
    setAddLoading(false);
    fetchUsers();
  }

  async function deleteAllUsers() {
    await db.users.clear();
    fetchUsers();
  }

  async function getAllUsersCount() {
    const c = await db.users.count();
    setCount(c); // update state instead of just console.log
  }

  useEffect(() => {
    getAllUsersCount(); // fetch count on mount
  }, []);
  return (
    <div className="gap-1 my-1 border-0 flex flex-row">
      <Button size="sm" variant={"outline"} onClick={deleteAllUsers}>
        Delete All
      </Button>
      <Input
        className="w-[100px]"
        type="number"
        value={randomRecordsCount}
        onChange={(e) => {
          setRandomRecordsCount(Number(e.target.value));
        }}
      ></Input>
      <Button size="sm" variant={"outline"} onClick={addBulkUsers}>
        {addLoading ? "Loading..." : "Add Users"}
      </Button>

      <div className="underline px-2">Count : {count}</div>
    </div>
  );
};

export default UniversalActions;
