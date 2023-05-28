import React from "react";
import styles from "./header.module.css";
import { IconAnon } from "../../Icons";
import { Nav } from "./Nav";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.avatarBox}>
        <IconAnon />
      </div>
      <Nav />
    </div>
  );
}
