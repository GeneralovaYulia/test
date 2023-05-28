import React from "react";
import { Layout } from "../Layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

export function LayoutPage() {
  const idInstance = useSelector<RootState, string>((state) => state.id);
  const apiTokenInstance = useSelector<RootState, string>(
    (state) => state.token
  );

  return <Layout id={idInstance} token={apiTokenInstance} />;
}
