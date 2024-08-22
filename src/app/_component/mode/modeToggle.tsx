"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./modeToggle.module.css";

export default function ModeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const headerElement = document.getElementById("header");

    if (savedTheme === "light-mode") {
      document.body.classList.add("light-mode");
      headerElement?.classList.add(styles.lightMode);
      setIsLightMode(true);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    const headerElement = document.getElementById("header");

    if (newMode) {
      document.body.classList.add("light-mode");
      headerElement?.classList.add(styles.lightMode);
      localStorage.setItem("theme", "light-mode");
    } else {
      document.body.classList.remove("light-mode");
      headerElement?.classList.remove(styles.lightMode);
      localStorage.setItem("theme", "dark-mode");
    }
  };

  return (
    <i className={styles.mode} onClick={toggleMode}>
      {isLightMode ? <FaSun /> : <FaMoon />}
    </i>
  );
}
