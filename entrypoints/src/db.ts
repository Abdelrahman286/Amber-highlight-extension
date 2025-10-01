// src/db.ts
import Dexie, { Table } from "dexie";
import { Websites, StoredHighlight } from "../content/type";

// Extend Dexie with typed tables
export class AmberDatabase extends Dexie {
  websites!: Table<Websites>;
  highlights!: Table<StoredHighlight>;

  constructor() {
    super("AMBER_DATABASE");

    // Define schema (versioned)
    this.version(1).stores({
      websites: "id,createdAt,url,[createdAt+id]",
    });
    this.version(1).stores({
      highlights:
        "id,createdAt,urlId,color,textColor,selectionString,anchorOffset,focusOffset,anchorPath,focusPath,anchorContext,focusContext,[createdAt+id]",
    });
  }
}

// Create and export database instance
export const db = new AmberDatabase();
