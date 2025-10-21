import { useEffect, useState } from "react";

/**
 * Hook to track whether Amber extension is enabled.
 * Works in content script page.
 */
export function useAmberEnabled() {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // 1️⃣ Load initial state
    (async () => {
      try {
        const result = await browser.storage.local.get("amberEnabled");
        if (isMounted) {
          setEnabled(result?.amberEnabled ?? true);
          setLoading(false);
        }
      } catch (err) {
        console.error("Error reading amberEnabled:", err);
        if (isMounted) setLoading(false);
      }
    })();

    // 2️⃣ Listen for changes
    const handleChange = (changes: Record<string, any>, areaName: string) => {
      if (areaName === "local" && changes.amberEnabled) {
        const newValue = changes?.amberEnabled?.newValue ?? true;
        if (isMounted) setEnabled(newValue);
      }
    };

    browser.storage.onChanged.addListener(handleChange);

    return () => {
      isMounted = false;
      browser.storage.onChanged.removeListener(handleChange);
    };
  }, []);

  return { enabled, loading };
}
