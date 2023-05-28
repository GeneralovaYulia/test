import React from "react";
import styles from "./header.module.css";
import { Menu } from "./Menu";
import { IconAnon } from "../../Icons";

export interface IHeader {
  id: string;
  number: string;
}

export function Header({id, number}: IHeader) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="" />
        <IconAnon />
      </div>
      <div className={styles.name}>{number}</div>
      <div className={styles.nav}>
        <Menu />
      </div>
    </div>
  );
}
