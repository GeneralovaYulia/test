import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from "./store/store";
import { LayoutPage } from "./components/LayoutPage";
import { MainPage } from "./components/MainPage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/stat" element={<LayoutPage />} />
            <Route path="*" element={<ErrorPage />} />
					</Routes>
			</BrowserRouter>
    </Provider>
  );
}

export default App;
