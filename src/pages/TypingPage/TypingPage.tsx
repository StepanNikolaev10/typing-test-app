import type { TTheme } from "../../types/theme";
import styles from "./TypingPage.module.scss";

type TProps = {
  theme: TTheme;
};

const TypingPage = ({ theme }: TProps) => {
  return (
    <div className={styles.typingPage}>
      <main className={styles.main}>SDF</main>
    </div>
  );
};
export default TypingPage;
