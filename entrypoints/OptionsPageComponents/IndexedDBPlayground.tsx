import { useState } from "react";
import { db } from "./db";
import { User } from "./types";
import UniversalActions from "./UniversalActions";
import { usePaginatedUsers } from "./usePaginatedUsers";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndexedDBPlayground = () => {
  const [editedUser, setEditingUser] = useState<User | null>(null);

  // Pagination hook
  const {
    users: paginatedUsers,
    loadMore,
    loading,
    refetch: fetchUsers,
    hasMore,
  } = usePaginatedUsers(100);

  async function handleDelete(id: string) {
    await db.users.delete(id);
    fetchUsers(); // refresh after delete
  }

  return (
    <div>
      <h3 className="text-lg font-bold">Indexed DB Playground</h3>

      {/* Add Form */}
      <AddForm fetchUsers={fetchUsers} />

      {/* Records */}
      <div className="border-2 p-2 m-2 w-[500px]">
        <h2 className="font-semibold mb-2 underline">Records</h2>

        <UniversalActions fetchUsers={fetchUsers} />

        <ul className="space-y-2 h-[400px] overflow-y-auto">
          {paginatedUsers.map((user, index) =>
            user?.id === editedUser?.id ? (
              <div key={user.id}>
                <EditForm
                  editedUser={editedUser}
                  setEditingUser={setEditingUser}
                  fetchUsers={fetchUsers}
                />
              </div>
            ) : (
              <li
                key={user.id}
                className="flex items-center justify-between border p-2 rounded"
              >
                <span>
                  {/* 👇 Numbering added */}
                  <span className="font-mono text-gray-500 mr-2">
                    {index + 1}.
                  </span>
                  {user.name} ({user.age})
                </span>
                <span>
                  Created at :{" "}
                  <strong>
                    {new Date(Number(user.createdAt)).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false,
                    })}
                  </strong>
                </span>
                <br></br>
                <div>
                  UUID : <strong>{user.id}</strong>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setEditingUser(user)}
                  >
                    <Edit />
                  </Button>
                  <Button
                    title="Delete"
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </li>
            )
          )}

          {/* ✅ Pagination actions */}
          {!loading ? (
            <div className="flex justify-center mt-3">
              <Button
                onClick={loadMore}
                //   disabled={loading || !hasMore}
                variant={hasMore ? "default" : "secondary"} // 👈 style changes
              >
                {hasMore ? "Load More" : "No More Records"}
              </Button>
            </div>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default IndexedDBPlayground;
