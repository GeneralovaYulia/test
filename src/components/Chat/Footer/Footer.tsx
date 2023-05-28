import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./footer.module.css";
import { IconPlus } from "../../Icons";
import { RootState } from "../../../store/rootReducer";
import axios from "axios";

export function Footer() {
  const idInstance = useSelector<RootState, string>((state) => state.id);
  const apiTokenInstance = useSelector<RootState, string>(
    (state) => state.token
  );
  const chatId = useSelector<RootState, string>(
    (state) => state.activeChart.chatId
  );
  const [value, setValue] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!value) return;

    try {
      axios
        .post(
          `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
          {
            chatId: chatId,
            message: `${value}`,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log('OK');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("error");
    }

    setValue("");
  }

  return (
    <div className={styles.footer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.formControl}
          placeholder="Введите сообщение"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit">
          <IconPlus />
        </button>
      </form>
    </div>
  );
}
