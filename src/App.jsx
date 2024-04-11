import { useState } from "react";
import { Home } from "./pages/Home";
import styles from "./app.module.css";

function App() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // console.log(mousePosition);

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.addEventListener("mousemove", mouseMove);
  //   };
  // }, []);
  // const [count, setCount] = useState(0);

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
