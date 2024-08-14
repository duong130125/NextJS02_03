import React from "react";
import types from "./BT9.module.css";

export default function BT9() {
  return (
    <div className={types.baseAlert}>
      <p className={types.success}>Success Text</p>
      <p className={types.info}>Info Text</p>
      <p className={types.warning}>Warning Text</p>
      <p className={types.error}>Error Text</p>
    </div>
  );
}
