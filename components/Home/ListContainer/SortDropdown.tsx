import React from "react";
import styles from "./Artwork.module.scss";

const SortDropDown = () => {
  return (
    <select
      className={styles["tab-nav__sort-dropdown"] + " select"}
      id={"dropdown"}
    >
      <option className={styles["tab-nav__sort-option"]} value="latest">
        Latest
      </option>
      <option className={styles["tab-nav__sort-option"]} value="earliest">
        Earliest
      </option>
    </select>
  );
};
export default SortDropDown;
