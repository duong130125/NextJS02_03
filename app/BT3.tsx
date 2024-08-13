import React from "react";
import styles from "./BT3.module.css";

export default function BT3() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Form Sign up</h2>
        <form>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              placeholder="Your name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Phone number</label>
            <div className={styles.selectInput}>
              <select className={styles.select}>
                <option value="US">US</option>
                <option value="VN">VN</option>
              </select>
              <input
                type="tel"
                placeholder="+84 (123) 456-789"
                className={styles.phoneInput}
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Address</label>
            <textarea placeholder="Your address" className={styles.textarea} />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Skills</label>
            <div className={styles.skillsGrid}>
              {[
                "HTML",
                "JavaScript",
                "UX Design",
                "ReactJS",
                "CSS",
                "Java",
              ].map((skill) => (
                <div key={skill}>
                  <input
                    type="checkbox"
                    id={skill.toLowerCase()}
                    className={styles.checkbox}
                  />
                  <label
                    htmlFor={skill.toLowerCase()}
                    className={styles.checkboxLabel}
                  >
                    {skill}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button type="submit" className={styles.submitButton}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
