import React, { useState } from "react";

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <h1>Task11</h1>
      <h1>{isDark ? "The current theme is Dark " : "The current theme is Light"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: isDark ? "#555" : "#ddd",
          color: isDark ? "#fff" : "#000",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
