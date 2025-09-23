// src/db.ts
import Dexie, { Table } from "dexie";
import { User } from "./types";

// Extend Dexie with typed tables
export class AmberDatabase extends Dexie {
  users!: Table<User>;

  constructor() {
    super("AMBER_DATABASE");

    // Define schema (versioned)
    this.version(1).stores({
      users: "id,createdAt,name,age,[createdAt+id]", // id auto-increments, indexes on name and age
    });
  }
}

// Create and export database instance
export const db = new AmberDatabase();
