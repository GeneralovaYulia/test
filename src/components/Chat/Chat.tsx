import React from "react";
import styles from "./chat.module.css";
import { useSelector } from 'react-redux';
import { Header } from "./Header";
import { Conversation } from "./Conversation";
import { Footer } from "./Footer";
import { Chart, RootState } from "../../store/rootReducer";

export interface IChat {
  id: string;
  token: string;
}

export function Chat({id, token}: IChat) {
  const activeChart = useSelector<RootState, Chart>((state) => state.activeChart);

  return (
    <div className={styles.chat}>
      <Header id={activeChart.chatId} number={activeChart.number} />
      <Conversation idInstance={id} apiTokenInstance={token} />
      <Footer />
    </div>
  );
}
