"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

const DarkMode: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body");
    const darkStore = localStorage.getItem("darkMode");

    if (darkStore === "true") {
      setDarkTheme(true);
    }

    else {
      body?.classList.remove("dark");
      setDarkTheme(false);
    }
  }, []);

  const handleToogleTheme = () => {
    const body = document.querySelector("body");

    if (body?.classList.contains("dark")) {
      body?.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      setDarkTheme(false);
    }

    else {
      body?.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      setDarkTheme(true);
    }
  };

  return (
    <button onClick={handleToogleTheme}>
      {darkTheme ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkMode;