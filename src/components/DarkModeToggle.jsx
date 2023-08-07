import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <button
        className="dark-mode-toggle btn btn-ghost text-2xl ml-3"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
