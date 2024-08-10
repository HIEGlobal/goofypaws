import React from "react";
import styles from "./wrapper.module.css";

const ContentWrapper = ({ children }) => {
  return (
    <div className={styles.outerwrapper}>
      <div className={styles.innerwrapper}>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
