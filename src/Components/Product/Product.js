import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../Redux/ReduxSlice/productSlice";
import { ProductCard } from "../ProductCard.js/ProductCard";
import styles from "./Product.module.css";

export const Product = () => {
  const items = useSelector((state) => state.products.items);

  return (
    <>
      <div className={styles.mainProduct}>
        <div className={styles.cardContainer}>
          {items.map((item) => (
            <div className={styles.Card} key={item.id}>
              <ProductCard item={item} id={item.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
