import React from "react";
import styles from "./errorpage.module.css";
import { IconError } from "../Icons";

export function ErrorPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 align-self-center">
          <IconError />
        </div>
        <div className="col-md-6 align-self-center">
          <h1>404</h1>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery.
          </p>
          <a href="/">Go back to main page! </a>
        </div>
      </div>
    </div>
  );
}
