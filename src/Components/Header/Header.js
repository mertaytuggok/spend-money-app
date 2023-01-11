import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerMain}>
      <div className={styles.imgText}>
        <span>
          <img
            className={styles.image}
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
          />
        </span>
        <span>Spend Elon Musk's Money</span>
      </div>
    </div>
  );
};
