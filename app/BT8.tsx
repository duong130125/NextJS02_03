import React, { useState } from "react";
import styles from "./BT8.module.css";

export default function BT8() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 20;

  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageButton} ${
            currentPage === i ? styles.active : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  return (
    <div className={styles.pagination}>
      <button
        className={styles.navButton}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>
      {renderPageNumbers()}
      <button
        className={styles.navButton}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}
