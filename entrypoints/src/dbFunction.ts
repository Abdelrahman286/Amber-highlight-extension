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

// --- Get Single Highlight by ID ---
export const getHighlightDB = async (
  id: string
): Promise<{
  success: boolean;
  data?: StoredHighlight;
  error?: string;
}> => {
  try {
    const highlight = await db.highlights.get(id);

    if (!highlight) {
      return { success: false, error: "Highlight not found" };
    }

    return { success: true, data: highlight };
  } catch (err: any) {
    console.error("Error fetching highlight:", err);
    return { success: false, error: err.message };
  }
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
  try {
    // First, get the highlight (to retrieve urlId)
    const highlight = await db.highlights.get(id);
    if (!highlight) {
      return { success: false, error: `Highlight with id ${id} not found.` };
    }

    const { urlId } = highlight;

    // Delete the highlight
    await db.highlights.delete(id);
    console.log(`Highlight with id ${id} deleted successfully.`);

    // Check if there are other highlights for this urlId
    const remaining = await db.highlights.where("urlId").equals(urlId).count();

    if (remaining === 0) {
      // No other highlights → delete website record
      await db.websites.delete(urlId);
      console.log(`Website with id ${urlId} deleted (no highlights left).`);
    } else {
      console.log(
        `Website with id ${urlId} kept (still ${remaining} highlight(s) left).`
      );
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error deleting highlight:", err);
    return { success: false, error: err.message };
  }
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

// --- get website highlights ---
export const getWebsiteHighlightsDB = async (
  url: string
): Promise<{ success: boolean; error?: string; data?: StoredHighlight[] }> => {
  try {
    // 1. Find the website entry by its url
    const website = await db.websites.where("url").equals(url).first();

    if (!website) {
      return { success: false, error: "Website not found" };
    }

    // 2. Use website.id (urlId) to get all highlights
    const highlights = await db.highlights
      .where("urlId")
      .equals(website.id)
      .toArray();

    // 3. Sort by createdAt
    highlights.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));

    console.log(highlights);

    return { success: true, data: highlights };
  } catch (err: any) {
    console.error("Error fetching highlights:", err);
    return { success: false, error: err.message };
  }
};

// --- Test Delya ---
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// --- update property in highlights ---
export const updateHighlightDB = async (
  id: string,
  updates: Partial<StoredHighlight>
): Promise<{
  success: boolean;
  error?: string;
  updated?: boolean;
}> => {
  try {
    // Make sure the record exists
    const existing = await db.highlights.get(id);

    if (!existing) {
      return { success: false, error: "Highlight not found" };
    }
    console.log(id, updates);
    // Update only the given fields
    const result = await db.highlights.update(id, updates);
    return { success: true, updated: result > 0 };
  } catch (err: any) {
    console.error("Error updating highlight:", err);
    return { success: false, error: err.message };
  }
};
