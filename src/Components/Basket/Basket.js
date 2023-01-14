import React from "react";
import styles from "./Basket.module.css";

export const Basket = () => {
  return (
    <div className={styles.mainBasket}>
      <div className={styles.Header}>Your Receipt</div>
      <div className={styles.container}>
        <div>Product List</div>
        <div>xAdet</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
      <div className={styles.hr} />
      <div className={styles.container}>
        <div className={styles.totalList}>Total</div>
        <div>$TotalPrice</div>
      </div>
    </div>
  );
};
