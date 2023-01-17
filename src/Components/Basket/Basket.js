import React from "react";
import { useSelector } from "react-redux";
import styles from "./Basket.module.css";

export const Basket = () => {
  const items = useSelector((state) => state.products.items);
  const filtered = items.filter((item) => item.count > 0);

  let spentMoney = 0;
  filtered.forEach((item) => {
    spentMoney += item.productPrice * item.count;
  });

  if (filtered.length === 0) {
    return null;
  }

  return (
    <div className={styles.mainBasket}>
      <div className={styles.Header}>Your Receipt</div>
      {filtered.map((item) => (
        <div key={item.id}>
          <div className={styles.container}>
            <div>{item.productName}</div>
            <div>x{item.count}</div>
            <div className={styles.totalPrice}>
              ${(item.productPrice * item.count).toLocaleString()}
            </div>
          </div>
        </div>
      ))}{" "}
      <div className={styles.hr} />
      <div className={styles.container}>
        <div className={styles.totalList}>Total</div>
        <div>${Number(spentMoney).toLocaleString()} </div>
      </div>
    </div>
  );
};
