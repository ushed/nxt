// src/app/_component/burger/burger.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { IconParkTwotoneBigX } from "@/app/_component/burger/support";
import ModeToggle from "../mode/modeToggle";
import styles from "./burger.module.css";

export default function Burger() {
  useEffect(() => {
    const burger = document.querySelector(`.${styles.burger}`);
    const nav = document.querySelector(`.${styles.nav_links}`);

    const handleClick = () => {
      if (nav && burger) {
        nav.classList.toggle(styles.nav_active);
        burger.classList.toggle(styles.toggle);
      }
    };

    if (burger) {
      burger.addEventListener("click", handleClick);
      return () => {
        burger.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <nav>
      <ul className={styles.nav_links}>
        <div className={styles.nav_mode}>
          <li>
            <Link href="/creation">Creations</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.btn}>
            <Link
              href="https://ushed.github.io/support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconParkTwotoneBigX />
            </Link>
          </li>
          <ModeToggle navClassName={styles.nav_mode} />
        </div>
      </ul>
      <div className={styles.burger}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
}
