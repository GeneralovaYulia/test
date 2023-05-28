import React from "react";
import styles from "./menu.module.css";
import { IconDropdown, IconSearch } from "../../../Icons";

export function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.searchButton}>
        <IconSearch />
      </div>
      <div className={styles.conversationMenuButton}>
        <IconDropdown />
      </div>
    </div>
  );
}
