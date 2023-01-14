import React from "react";
import { useSelector } from "react-redux";
import styles from "./Product.module.css";

export const Product = () => {
  const items = useSelector((state) => state.products.items);
  const budget = useSelector((state) => state.products.budget);
  const editBudget = Number(budget).toLocaleString();

  return (
    <>
      <div className={styles.budget}>${editBudget} </div>
      <div className={styles.mainProduct}>
        <div className={styles.cardContainer}>
          {items.map((item) => (
            <div className={styles.Card} key={item.id}>
              {" "}
              <div className={styles.topCard}>
                <span>
                  <img className={styles.image} src={item.image} />
                </span>
                <span className={styles.Title}>{item.productName}</span>
                <span className={styles.Price}>${item.productPrice}</span>
              </div>
              <div className={styles.bottomCard}>
                {" "}
                <button className={styles.sellButton}>Sell</button>
                <input className={styles.input} />
                <button className={styles.buyButton}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
