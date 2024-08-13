import React from "react";
import styles from "./BT7.module.css";

export default function BT7() {
  return (
    <div className={styles.button}>
      <button className={styles.primary}>Primary</button>

      <button className={styles.success}>Success</button>

      <button className={styles.warning}>Warning</button>

      <button className={styles.danger}>Danger</button>
    </div>
  );
}
