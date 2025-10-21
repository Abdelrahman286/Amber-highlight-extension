import React from "react";

const AboutPage = () => {
  return (
    <div
      style={{
        padding: "16px",
        fontFamily: "monospace",
        lineHeight: "1.7",
        fontSize: "14px",
        letterSpacing: "0.3px",
        maxWidth: "500px",
      }}
    >
      <h1 style={{ fontSize: "18px", marginBottom: "8px" }}>About Amber</h1>
      <p>Version: 1.0.0</p>
      <p>Year: 2025</p>

      <h2 style={{ fontSize: "16px", marginTop: "16px", marginBottom: "8px" }}>
        Privacy Policy
      </h2>
      <p>
        Amber does not collect, store, or share any personal data on remote
        servers. All your data and highlights are saved locally on your machine.
        The extension is completely free and open source, licensed under the MIT
        License.
      </p>

      <p>
        By using Amber, you acknowledge that your data remains entirely under
        your control. No information is transmitted to third parties, and no
        analytics or tracking tools are included. Users are free to inspect,
        modify, or distribute the source code in accordance with the terms of
        the MIT License.
      </p>

      <p>
        This extension is provided “as is”, without warranty of any kind,
        express or implied, including but not limited to the warranties of
        merchantability, fitness for a particular purpose, and noninfringement.
        In no event shall the authors or copyright holders be liable for any
        claim, damages, or other liability arising from, out of, or in
        connection with the software or the use or other dealings in the
        software.
      </p>

      <h2 style={{ fontSize: "16px", marginTop: "16px", marginBottom: "4px" }}>
        Contact
      </h2>
      <p>
        Email:{" "}
        <a
          href="mailto:ab.devextensions@gmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          ab.devextensions@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/Abdelrahman286"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          github.com/Abdelrahman286
        </a>
      </p>
    </div>
  );
};

export default AboutPage;
