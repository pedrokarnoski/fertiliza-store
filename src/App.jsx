import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}
