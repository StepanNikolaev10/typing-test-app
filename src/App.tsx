import { BrowserRouter, Routes, Route } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import styles from "./App.module.scss";
import TypingPage from "./pages/TypingPage/TypingPage";
import { useEffect, useState } from "react";
import type { TTheme } from "./types/theme";

function App() {
  const [theme, setTheme] = useState<TTheme>("light");

  // получение темы из localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) return;
    const theme = JSON.parse(storedTheme);
    setTheme(theme);
  }, []);

  const changeTheme = () => {
    let changedTheme: TTheme;
    theme === "light" ? (changedTheme = "dark") : (changedTheme = "light");
    localStorage.setItem("theme", JSON.stringify(changedTheme));
    setTheme(changedTheme);
  };

  return (
    <BrowserRouter>
      <button className={styles.toggleThemeBtn} onClick={changeTheme}></button>
      <Routes>
        <Route path="/" element={<StartPage theme={theme} />} />
        <Route path="/typing" element={<TypingPage theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
