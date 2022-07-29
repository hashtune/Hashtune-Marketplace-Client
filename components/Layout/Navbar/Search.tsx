import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

const Search = () => {
  return (
    <div className={styles["navbar__search"]}>
      <svg className={styles["navbar__search--icon"]}>
        <use xlinkHref="/dist/icons/sprite.svg#hashtune-search" />
      </svg>
      <input
        type="text"
        className={styles["navbar__search--input"]}
        placeholder="Search Hashtunes"
      />
    </div>
  );
};
export default Search;
