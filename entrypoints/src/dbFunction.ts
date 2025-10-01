import { db } from "./db";
import { StoredHighlight } from "../content/type";
import { Websites } from "../content/type";

// --- Get All Highlights ---
export const getAllHighlightsDB = async (): Promise<{
  success: boolean;
  data?: StoredHighlight[];
  error?: string;
}> => {
  return db.highlights
    .toArray()
    .then((data) => {
      return { success: true, data };
    })
    .catch((err) => {
      console.error("Error loading highlights:", err);
      return { success: false, error: err.message };
    });
};

// --- Add Highlight ---
export const addHighlightDB = async (
  data: StoredHighlight
): Promise<{ success: boolean; error?: string }> => {
  return db.highlights
    .add(data)
    .then(() => {
      return { success: true };
    })
    .catch((err) => {
      console.error("Error adding new highlight:", err);
      return { success: false, error: err.message };
    });
};

// --- Delete All Highlights ---
export const deleteAllHighlightsDB = async (): Promise<{
  success: boolean;
  error?: string;
}> => {
  return db.highlights
    .clear()
    .then(() => {
      console.log("All highlights deleted successfully.");
      return { success: true };
    })
    .catch((err) => {
      console.error("Error deleting highlights:", err);
      return { success: false, error: err.message };
    });
};

// --- Delete Single Highlight ---
export const deleteHighlightDB = async (
  id: string
): Promise<{ success: boolean; error?: string }> => {
  return db.highlights
    .delete(id)
    .then(() => {
      console.log(`Highlight with id ${id} deleted successfully.`);
      return { success: true };
    })
    .catch((err) => {
      console.error("Error deleting highlight:", err);
      return { success: false, error: err.message };
    });
};

// --- Add Website ---
export const addWebsiteDB = async (
  data: Websites
): Promise<{
  success: boolean;
  error?: string;
  skipped?: boolean;
  websiteID?: string;
}> => {
  try {
    // check if this url already exists
    const existing = await db.websites.where("url").equals(data.url).first();

    if (existing) {
      return { success: true, skipped: true, websiteID: existing.id }; // already exists, skip insert
    }

    await db.websites.add(data);
    return { success: true, websiteID: data.id };
  } catch (err: any) {
    console.error("Error adding new website:", err);
    return { success: false, error: err.message };
  }
};
