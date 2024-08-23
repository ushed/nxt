// src/app/_component/mode/modeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { IconParkTwotoneMoon } from "@/app/_component/mode/moon";
import { IconParkTwotoneSun } from "@/app/_component/mode/sun";
import styles from "./modeToggle.module.css";

interface ModeToggleProps {
  navClassName: string;
}

export default function ModeToggle({ navClassName }: ModeToggleProps) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const headerElement = document.getElementById("header");
    const navElement = document.querySelector(`.${navClassName}`);

    if (savedTheme === "light-mode") {
      document.body.classList.add("light-mode");
      headerElement?.classList.add(styles.lightMode);
      navElement?.classList.add(styles.lightMode);
      setIsLightMode(true);
    }
  }, [navClassName]);

  const toggleMode = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    const headerElement = document.getElementById("header");
    const navElement = document.querySelector(`.${navClassName}`);

    if (newMode) {
      document.body.classList.add("light-mode");
      headerElement?.classList.add(styles.lightMode);
      navElement?.classList.add(styles.lightMode);
      localStorage.setItem("theme", "light-mode");
    } else {
      document.body.classList.remove("light-mode");
      headerElement?.classList.remove(styles.lightMode);
      navElement?.classList.remove(styles.lightMode);
      localStorage.setItem("theme", "dark-mode");
    }
  };

  return (
    <i className={styles.mode} onClick={toggleMode}>
      {isLightMode ? <IconParkTwotoneSun /> : <IconParkTwotoneMoon />}
    </i>
  );
}
