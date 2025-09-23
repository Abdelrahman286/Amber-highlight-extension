import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { db } from "./db";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { User } from "./types";

interface UserEditorProps {
  setEditingUser: Dispatch<SetStateAction<User | null>>;
  fetchUsers: () => Promise<void>;
  editedUser: User;
}

const EditForm = ({
  setEditingUser,
  fetchUsers,
  editedUser,
}: UserEditorProps) => {
  const [updateForm, setUpdateForm] = useState<User>({
    name: "",
    age: 0,
    createdAt: 0,
    id: "",
  });

  async function handleUpdateUser() {
    if (updateForm?.id) {
      const { name, age } = updateForm;
      await db.users.update(updateForm?.id, { name, age });
      setEditingUser(null);
      fetchUsers();
    }
  }

  useEffect(() => {
    if (editedUser?.id) {
      setUpdateForm(editedUser);
    }
  }, [editedUser]);
  return (
    <div key={editedUser.id}>
      <label>Name</label>
      <Input
        value={updateForm?.name}
        onChange={(e) => {
          setUpdateForm({ ...updateForm, name: e.target.value });
        }}
      />

      <label>Age</label>
      <Input
        type="number"
        value={updateForm?.age}
        onChange={(e) => {
          setUpdateForm({
            ...updateForm,
            age: Number(e.target.value),
          });
        }}
      />
      <div className="flex gap-1 my-1">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setEditingUser(null)}
        >
          Cancel
        </Button>
        <Button variant="default" size="sm" onClick={() => handleUpdateUser()}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditForm;
