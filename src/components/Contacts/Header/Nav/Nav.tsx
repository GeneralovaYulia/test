import React from "react";
import styles from "./nav.module.css";
import { IconChat, IconCommunity, IconDropdown, IconStatus } from "../../../Icons";

export function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.menuBarCommunity}>
        <IconCommunity />
      </div>
      <div className={ styles.menuBarStatus}>
        <IconStatus />
      </div>
      <div className={styles.menuBarChat}>
        <IconChat />
      </div>
      <div className={styles.menuBar}>
        <IconDropdown />
      </div>
    </div>
  );
}
