import { useEffect } from "react";

const GOOGLE_FONTS_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
`;

// Define a unique custom font name that maps to Roboto
const CUSTOM_FONTS = `
@font-face {
  font-family: 'amber-roboto-font';
  src: local('Roboto'), local('Roboto-Regular'),
       url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
}


`;

/**
 * Injects Google Web Fonts and custom font-face alias into the document once.
 */
export const useWebFonts = () => {
  useEffect(() => {
    const STYLE_ID = "dameg-custom-font-loader-style";

    if (document.getElementById(STYLE_ID)) return;

    try {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `${GOOGLE_FONTS_IMPORT}\n${CUSTOM_FONTS}`;
      document.head.appendChild(style);
    } catch (error) {
      console.error("Failed to load web fonts:", error);
    }
  }, []);
};
