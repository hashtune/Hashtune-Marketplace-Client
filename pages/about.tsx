import React from "react";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "./about.module.scss";
export default function Explore() {
  return (
    <div>
      <Navbar />
      <div className={styles["about"]}>
        <h1>ABOUT</h1>
        <br />
        <br />
        <p>
          Hashtune is a platform for artists to create and sell their audio
          tracks as one of a kind records. Each digital record represents a
          unique, permanent, source file online. Each record is sellable,
          auction-able, and can provide access to certain offline events. The
          idea is to provide listeners with cryptographically secure assets, and
          to support artists by paying them fairly for their work.
        </p>
        <br />
        <p>
          Hashtune's mission is to facilitate the distribution and monetisation
          for music artists so that they can live comfortably off their
          creations and focus on doing what they love. Hashtune's vision is to
          create a more transparent and decentralised internet where all content
          creators are paid fairly for their work.
        </p>
      </div>
    </div>
  );
}
