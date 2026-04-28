import styles from "./TypingPage.module.scss";

const TypingPage = () => {
  return (
    <div className={styles.typingPage}>
      <a className={styles.logo}>Typing test</a>
      <main className={styles.main}>
        <div className={styles.timer}>Timer</div>
        <div className={styles.timer}>Timer</div>
      </main>
    </div>
  );
};
export default TypingPage;
