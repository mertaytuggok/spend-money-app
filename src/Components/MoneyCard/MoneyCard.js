import React from "react";
import { useSelector } from "react-redux";
import styles from "./MoneyCard.module.css";

export const MoneyCard = () => {
  const budget = useSelector((state) => state.products.budget);

  return (
    <div className={styles.budget}>${Number(budget).toLocaleString()}</div>
  );
};
