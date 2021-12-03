import React from "react";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "./faq.module.scss";
export default function Explore() {
  return (
    <div>
      <Navbar />
      <div className={styles["faq"]}>
        <h1>FAQ</h1>
        <br />
        <br />
        <p>HOW MUCH DO ARTISTS TAKE?</p>
        <p>
          Artists receive close to 100% of their initial record sale, and then
          receive a percentage or "share" that they alone specify, on every
          subsequent transaction (sale or auction). They can also set "shares"
          for other artists who contributed to the record.
        </p>
        <br />
        <p>WILL MY TOKEN EVERY DISAPPEAR?</p>
        <p>
          No. We store the permanent record data on Inter Planetary File System
          (IPFS), because IPFS is distributed rather than centralised, so it
          cannot disappear the same way a centralised server hosted on Amazon
          Web Services can. We also log every token creation on the blockchain -
          we use an Ethereum clone called Binance which is significantly cheaper
          in terms of transactional costs or "gas".
        </p>
        <br />
        <p>HOW IS MY TOKEN VALUABLE?</p>
        <p>
          The actual artwork is accessible for anyone to listen to at any time,
          with or without an account, the difference is that we introduce a
          uniqueness and scarcity to each record that provides value for the
          creators and current owner. The certificate that proves the work is
          authentic is the Non Fungible Token (NFT) standard ERC-1155.
        </p>
      </div>
    </div>
  );
}
