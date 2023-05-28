import React from "react";
import styles from "./layout.module.css";
import { Contacts } from "../Contacts";
import { Chat } from "../Chat";

export interface ILayout {
  id: string;
  token: string;
}

export function Layout({id, token}: ILayout) {
  return (
    <div className={styles.layout}>
      <Contacts />
      <Chat id={id} token={token} />
    </div>
  );
}
