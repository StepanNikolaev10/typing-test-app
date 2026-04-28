import { BrowserRouter, Routes, Route } from "react-router";
import StartPage from "./pages/StartPage/StartPage";
import TypingPage from "./pages/TypingPage/TypingPage";
import { useEffect } from "react";
import { useThemeStore } from "./stores/useThemeStore";

function App() {
  const theme = useThemeStore((state) => state.currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/typing" element={<TypingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
