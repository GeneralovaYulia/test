import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./formsearch.module.css";
import { nanoid } from "nanoid";
import InputMask from "react-input-mask"
import { IconPlus } from "../../Icons";
import { setChart } from "../../../store/rootReducer";

export function FormSearch() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!value) return;
    const chart = {
      number: value,
      chatId: `${value.replace(/[^0-9]/g, "")}@c.us`,
    };

    dispatch(setChart(chart));
    setValue('');
  }

  return (
    <div className={styles.formSearch}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputMask
          mask="+7 999 999 99 99"
          type="tel"
          className={styles.formControl}
          placeholder="Новый чат"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></InputMask>
        <button type="submit">
          <IconPlus />
        </button>
      </form>
    </div>
  );
}
