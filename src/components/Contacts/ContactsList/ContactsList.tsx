import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./contactslist.module.css";
import { Chart, RootState, setActiveChart } from "../../../store/rootReducer";

export function ContactsList() {
  const listChart = useSelector<RootState, Chart[]>((state) => state.listChart);
  const dispatch = useDispatch();

  function handleClick(item: Chart) {
    dispatch(setActiveChart(item));

  }

  return (
    <ul className={styles.contactsList}>
      {listChart.map((item) => (
        <li
          key={item.chatId}
          className={styles.item}
          id={item.chatId}
          onClick={() => handleClick(item)}
        >
          {item.number}
        </li>
      ))}
    </ul>
  );
}
