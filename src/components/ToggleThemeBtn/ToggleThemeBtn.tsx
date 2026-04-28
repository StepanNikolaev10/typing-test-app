import { useThemeStore } from "../../stores/useThemeStore";
import styles from "./ToggleThemeBtn.module.scss";

const ToggleThemeBtn = () => {
  const currentTheme = useThemeStore((state) => state.currentTheme);
  const changeTheme = useThemeStore((state) => state.changeTheme);

  const toggleTheme = () => {
    currentTheme === "light" ? changeTheme("dark") : changeTheme("light");
  };

  return (
    <button className={styles.toggleThemeBtn} onClick={toggleTheme}></button>
  );
};
export default ToggleThemeBtn;
