import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "./db";
import { useState, useEffect, FormEvent } from "react";
import { generateUUID } from "./utils";


const AddForm = ({ fetchUsers }: { fetchUsers: () => void }) => {
  const [form, setForm] = useState<{ name: string; age: string }>({
    name: "",
    age: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.age) return;

    await db.users.add({
      id: generateUUID(),
      name: form.name,
      age: Number(form.age),
      createdAt: Date.now(),
    });

    setForm({ name: "", age: "" });
    fetchUsers();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 p-2 m-2 w-[300px] flex flex-col gap-2"
    >
      <label>Name</label>
      <Input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <label>Age</label>
      <Input
        type="number"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />

      <Button type="submit" className="mt-2">
        Save
      </Button>
    </form>
  );
};

export default AddForm;
