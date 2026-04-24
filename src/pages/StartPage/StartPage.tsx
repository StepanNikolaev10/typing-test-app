import styles from "./StartPage.module.scss";
import type { TTheme } from "../../types/theme";

type TProps = {
  theme: TTheme;
};

const StartPage = ({ theme }: TProps) => {
  return (
    <div
      className={`${styles.startPage} ${theme === "dark" ? styles.darked : ""}`}
    >
      <main className={styles.main}>
        <div className={styles.title}>Typing test</div>
        <button className={styles.startBtn}>Start</button>
      </main>
    </div>
  );
};
export default StartPage;
