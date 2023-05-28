import React from "react";
import styles from "./contacts.module.css";
import { Header } from "./Header";
import { FormSearch } from "./FormSearch";
import { ContactsList } from "./ContactsList";

export function Contacts() {
  return (
    <div className={styles.contacts}>
      <Header />
      <FormSearch />
      <ContactsList />
    </div>
  );
}
