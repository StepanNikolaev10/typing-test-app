import styles from "./StartPage.module.scss";
import ToggleThemeBtn from "../../components/ToggleThemeBtn/ToggleThemeBtn";

const StartPage = () => {
  return (
    <div
      className={`${styles.startPage}`}
    >
      <header className={styles.header}>
        <ToggleThemeBtn />
      </header>
      <main className={styles.main}>
        <div className={styles.title}>Typing test</div>
        <button className={styles.startBtn}>Start</button>
      </main>
    </div>
  );
};
export default StartPage;
