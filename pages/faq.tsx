import React from "react";
import { Navbar } from "../components/Layout/Navbar/Navbar";

export default function Explore() {
  return (
    <div>
      <Navbar />
      <div className="static-content-container">
        <h1>FAQ</h1>
        <h2 className="title-paragraph">How much do artists take?</h2>
        <p>
          Artists receive close to 100% of their initial record sale, and then
          receive a percentage or "share" that they alone specify, on every
          subsequent transaction (sale or auction). They can also set "shares"
          for other artists who contributed to the record.
        </p>
        <br />
        <h2 className="title-paragraph">Will my token ever disappear?</h2>
        <p>
          No. We store the permanent record data on Inter Planetary File System
          (IPFS), because IPFS is distributed rather than centralised, so it
          cannot disappear the same way a centralised server hosted on Amazon
          Web Services can. We also log every token creation on the blockchain -
          we use an Ethereum clone called Binance which is significantly cheaper
          in terms of transactional costs or "gas".
        </p>
        <br />
        <h2 className="title-paragraph">How is my token valuable?</h2>
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
