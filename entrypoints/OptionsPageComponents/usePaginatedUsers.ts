import { useEffect, useState } from "react";
import { db } from "./db";
import { User } from "./types";

export function usePaginatedUsers(pageSize = 100) {
  const [users, setUsers] = useState<User[]>([]);
  const [last, setLast] = useState<{ createdAt: number; id: string } | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Core fetcher
  async function fetchUsers(last?: { createdAt: number; id: string }) {
    if (!last) {
      // First page
      return await db.users
        .orderBy("[createdAt+id]")
        // .reverse() // newest first
        .limit(pageSize)
        .toArray();
    }

    // Next pages: strictly above last
    return await db.users
      .where("[createdAt+id]")
      .above([last.createdAt, last.id])
      .limit(pageSize)
      .toArray();
  }

  // Refetch from scratch
  async function refetch() {
    setLoading(true);
    const firstPage = await fetchUsers();
    setUsers(firstPage);

    if (firstPage.length > 0) {
      const lastUser = firstPage.at(-1)!;
      setLast({ createdAt: lastUser.createdAt, id: lastUser.id });
      setHasMore(firstPage.length === pageSize);
    } else {
      setLast(null);
      setHasMore(false);
    }

    setLoading(false);
  }

  // Load more (append)
  async function loadMore() {
    if (!last || !hasMore) return;
    setLoading(true);

    const nextPage = await fetchUsers(last);

    // Deduplicate safeguard
    setUsers((prev) => {
      const seen = new Set(prev.map((u) => u.id));
      return [...prev, ...nextPage.filter((u) => !seen.has(u.id))];
    });

    if (nextPage.length > 0) {
      const lastUser = nextPage.at(-1)!;
      setLast({ createdAt: lastUser.createdAt, id: lastUser.id });
      setHasMore(nextPage.length === pageSize);
    } else {
      setHasMore(false);
    }

    setLoading(false);
  }

  // Load first page on mount
  useEffect(() => {
    refetch();
  }, []);

  return { users, loadMore, refetch, loading, hasMore };
}
