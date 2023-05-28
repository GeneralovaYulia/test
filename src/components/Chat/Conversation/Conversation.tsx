import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./conversation.module.css";
import { nanoid } from "nanoid";
import {
  Chart,
  Message,
  RootState,
  setListMessages,
} from "../../../store/rootReducer";

export interface IConversation {
  idInstance: string;
  apiTokenInstance: string;
}

export function Conversation({ idInstance, apiTokenInstance }: IConversation) {
  const listMessages = useSelector<RootState, Message[]>(
    (state) => state.listMessages
  );
  const activeChart = useSelector<RootState, Chart>(
    (state) => state.activeChart
  );
  const dispatch = useDispatch();

  async function getApi() {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    if (data === null) return;

    await fetch(
      `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${data.receiptId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    if (
      data.body.status === "sent" ||
      data.body.status === "delivered" ||
      data.body.status === "read"
    )
      return;

    if (data.body.typeWebhook === "outgoingAPIMessageReceived") {
      const obj = {
        chatId: activeChart.chatId,
        chatName: data.body.senderData.chatName,
        typeWebhook: data.body.typeWebhook,
        idMessage: data.body.idMessage,
        message: data.body.messageData.extendedTextMessageData.text,
        createDate: new Date(),
      };
      dispatch(setListMessages(obj));
    }
    
    if (data.body.typeWebhook === "incomingMessageReceived") {
      const obj = {
        chatId: activeChart.chatId,
        chatName: data.body.senderData.chatName,
        typeWebhook: data.body.typeWebhook,
        idMessage: data.body.idMessage,
        message: data.body.messageData.textMessageData.textMessage,
        createDate: new Date(),
      };
      dispatch(setListMessages(obj));
    }
  }

  useEffect(() => {
    const interval = setInterval(getApi, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.conversation}>
      {listMessages.map((item) => (
        <div key={item.idMessage} role="row" id={item.idMessage}>
          <div
            className={
              item.typeWebhook === "incomingMessageReceived"
                ? styles.wrapperInto
                : styles.wrapperOut
            }
          >
            <div
              className={
                item.typeWebhook === "incomingMessageReceived"
                  ? styles.messageInto
                  : styles.messageOut
              }
            >
              <span>{(item.typeWebhook === "outgoingAPIMessageReceived") ? '' : item.chatName}</span>
              <span>{item.message}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
