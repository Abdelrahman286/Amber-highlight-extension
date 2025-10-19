import { db } from "./db";
import { Folder, StoredHighlight } from "../content/type";
import { Websites } from "../content/type";

// --- Test Delay ---
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// --- Get All Highlights ---
export const getAllHighlightsDB = async (): Promise<{
  success: boolean;
  data?: StoredHighlight[];
  error?: string | Error;
}> => {
  return db.highlights
    .toArray()
    .then((data) => {
      return { success: true, data };
    })
    .catch((err: unknown) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
};

// --- Get Single Highlight by ID ---
export const getHighlightDB = async (
  id: string
): Promise<{
  success: boolean;
  data?: StoredHighlight;
  error?: string | Error;
}> => {
  try {
    const highlight = await db.highlights.get(id);

    if (!highlight) {
      return { success: false, error: "Highlight not found" };
    }

    return { success: true, data: highlight };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};

// --- Add Highlight ---
export const addHighlightDB = async (
  data: StoredHighlight
): Promise<{ success: boolean; error?: string | Error }> => {
  return db.highlights
    .add(data)
    .then(() => {
      return { success: true };
    })
    .catch((err) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
};

// --- Delete All Highlights ---
export const deleteAllHighlightsDB = async (): Promise<{
  success: boolean;
  error?: string | Error;
}> => {
  return db.highlights
    .clear()
    .then(() => {
      console.log("All highlights deleted successfully.");
      return { success: true };
    })
    .catch((err) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
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
  error?: string | Error;
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
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};

// --- get website highlights ---
export const getWebsiteHighlightsDB = async (
  url: string
): Promise<{
  success: boolean;
  error?: string | Error;
  data?: StoredHighlight[];
}> => {
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

    return { success: true, data: highlights };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};

// --- update property in highlights ---
export const updateHighlightDB = async (
  id: string,
  updates: Partial<StoredHighlight>
): Promise<{
  success: boolean;
  error?: string | Error;
  updated?: boolean;
}> => {
  try {
    // Make sure the record exists
    const existing = await db.highlights.get(id);

    if (!existing) {
      return { success: false, error: "Highlight not found" };
    }

    // Update only the given fields
    const result = await db.highlights.update(id, updates);
    return { success: true, updated: result > 0 };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};

// get all websites list
export const getAllWebsitesDB = async (): Promise<{
  success: boolean;
  error?: string | Error;
  data?: Websites[];
}> => {
  try {
    const data = await db.websites.toArray(); // fetch all websites
    return { success: true, data };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};

// delete website and it's own highlights

export const deleteWebsiteDB = async (
  id: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Check if the website exists
    const website = await db.websites.get(id);
    if (!website) {
      return { success: false, error: `Website with id ${id} not found.` };
    }

    // Delete all highlights linked to this website
    await db.highlights.where("urlId").equals(id).delete();

    // Delete the website itself
    await db.websites.delete(id);
    return { success: true };
  } catch (err: any) {
    console.error("Error deleting website and its highlights:", err);
    return { success: false, error: err.message };
  }
};

// get all folders
export const getAllFoldersDb = async (): Promise<{
  success: boolean;
  data?: Folder[];
  error?: string | Error;
}> => {
  return db.folders
    .toArray()
    .then((data) => {
      return { success: true, data };
    })
    .catch((err: unknown) => {
      const errorMessage = err instanceof Error ? err : new Error(String(err));
      return { success: false, error: errorMessage };
    });
};

// get folder data of a single highlight
export const getFolderByHighlightIdDB = async (
  highlightId: string
): Promise<{
  success: boolean;
  data?: Folder;
  error?: string | Error;
}> => {
  try {
    // 1️⃣ Get the highlight first
    const highlight = await db.highlights.get(highlightId);

    if (!highlight) {
      return { success: false, error: "Highlight not found" };
    }

    // 2️⃣ Extract folderId
    const folderId = highlight.folderId;
    if (!folderId) {
      return { success: false, error: "Highlight has no folderId" };
    }

    // 3️⃣ Fetch the folder
    const folder = await db.folders.get(folderId);
    if (!folder) {
      return { success: false, error: "Folder not found" };
    }

    // 4️⃣ Return success
    return { success: true, data: folder };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};

// --- get folder highlights ---
export const getFolderHighlightsDB = async (
  id: string
): Promise<{
  success: boolean;
  error?: string | Error;
  data?: StoredHighlight[];
}> => {
  try {
    // 1. Get all highlights where folderId equals the given id
    const highlights = await db.highlights
      .where("folderId")
      .equals(id)
      .toArray();

    // 2. Sort by createdAt
    highlights.sort((a, b) => Number(a.createdAt) - Number(b.createdAt));

    // 3. Return the result
    return { success: true, data: highlights };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err : new Error(String(err));
    return { success: false, error: errorMessage };
  }
};
