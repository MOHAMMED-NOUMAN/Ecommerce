import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");

  const element = document.documentElement
  useEffect(() => {
    localStorage.setItem("theme",theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  return (
     <div
      className="relative w-12 h-5 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Light button */}
      <img
        src={LightButton}
        alt="Light"
        className={`absolute  inset-0  w-12 transition-opacity duration-400 
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />

      {/* Dark button */}
      <img
        src={DarkButton}
        alt="Dark"
        className={`absolute inset-0  w-12  transition-opacity duration-400 
        ${theme === "light" ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default DarkMode;
