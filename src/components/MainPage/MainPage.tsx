import React, { useState } from "react";
import styles from "./mainpage.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState, setId, setToken } from "../../store/rootReducer";

export function MainPage() {
  const idInstance = useSelector<RootState, string>((state) => state.id);
  const apiTokenInstance = useSelector<RootState, string>(
    (state) => state.token
  );
  const dispatch = useDispatch();
  const [IdInstance, setIdInstance] = useState('');
  const [ApiTokenInstance, setApiTokenInstance] = useState('');
  const navigate = useNavigate();

    if (idInstance !== '' && apiTokenInstance !== '') {
      try {
        axios
          .get(
            `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            if (response.data.stateInstance === "authorized") {
              dispatch(setId(IdInstance));
              dispatch(setToken(ApiTokenInstance));
              localStorage.setItem("IdInstance", JSON.stringify(IdInstance));
              localStorage.setItem("ApiTokenInstance", JSON.stringify(ApiTokenInstance));
              navigate("/stat", { replace: false });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("error");
      }
    }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      axios
        .get(
          `https://api.green-api.com/waInstance${IdInstance}/getStateInstance/${ApiTokenInstance}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.stateInstance === "authorized") {
            dispatch(setId(IdInstance));
            dispatch(setToken(ApiTokenInstance));
            localStorage.setItem("IdInstance", JSON.stringify(IdInstance));
            localStorage.setItem("ApiTokenInstance", JSON.stringify(ApiTokenInstance));
            navigate("/stat", { replace: false });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.formControl}
        placeholder="Введите idInstance"
        value={IdInstance}
        onChange={(e) => setIdInstance(e.target.value)}
      />
      <input
        type="text"
        className={styles.formControl}
        placeholder="Введите apiTokenInstance"
        value={ApiTokenInstance}
        onChange={(e) => setApiTokenInstance(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Авторизоваться
      </button>
    </form>
  );
}
