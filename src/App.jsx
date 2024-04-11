import { useState } from "react";
import { Home } from "./pages/Home";
import styles from "./app.module.css";

function App() {

  return (
    <>
      <div className={styles.app}>
        <Home />
      </div>
      <div className="cursor"></div>
    </>
  );
}

export default App;
