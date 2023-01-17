import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../Redux/ReduxSlice/productSlice";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ item, id }) => {
  const dispatch = useDispatch();
  const budget = useSelector((state) => state.products.budget);
  const [count, setCount] = useState(0);
  const [salable, setSalable] = useState(false);
  const [buyable, setBuyable] = useState(false);

  useEffect(() => {
    dispatch(updateCount({ id: item.id, count: count }));
  }, [count, item.id, dispatch]);

  const buy = () => {
    setCount(Number(count) + 1);
  };

  const sell = () => {
    setCount(Number(count) - 1);
  };
  useEffect(() => {
    if (count > 0) {
      setSalable(false);
    } else {
      setSalable(true);
    }
  }, [count]);
  useEffect(() => {
    if (item.productPrice > budget) {
      setBuyable(true);
    } else {
      setBuyable(false);
    }
  }, [budget, item.productPrice]);
  const handleChange = (value) => {
    const maxCount = Math.floor(budget / item.productPrice) + count;

    if (value && value > 0) {
      if (value > maxCount && budget >= 0) {
        setCount(maxCount);
      } else {
        setCount(value);
      }
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      {" "}
      <div className={styles.topCard}>
        <span>
          <img className={styles.image} src={item.image} />
        </span>
        <span className={styles.Title}>{item.productName}</span>
        <span className={styles.Price}>
          ${Number(item.productPrice).toLocaleString()}
        </span>
      </div>
      <div className={styles.bottomCard}>
        {" "}
        <button
          onClick={sell}
          disabled={salable}
          className={salable ? styles.disSellButton : styles.sellButton}
        >
          Sell
        </button>
        <input
          onChange={(e) => handleChange(parseInt(e.target.value))}
          className={styles.input}
          value={count}
          placeholder="0"
        />
        <button
          onClick={buy}
          disabled={buyable}
          className={buyable ? styles.dissBuyButton : styles.buyButton}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
