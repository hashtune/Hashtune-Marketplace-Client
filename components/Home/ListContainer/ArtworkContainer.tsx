import React, { useEffect, useState } from "react";
import styles from "./Artwork.module.scss";
import ListArtwork from "../ListArtwork/ListArtwork";
import { ListArtworksFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";
import client from "../../../lib/apollo-client";
import { queryListArtworks } from "../../../lib/apiQueries/ArtworkQueries";
import SortDropDown from "./SortDropdown";

const ArtworkContainer = (props: ListArtworksFieldsProp) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [tabState, setTabState] = useState("All Hashtunes");

  const getAuctions = async () => {
    const res = await client.query({
      query: queryListArtworks,
      variables: { listArtworksAuction: true, listArtworksListed: true },
    });
    setArtworks(res.data.listArtworks);
  };

  const getBuyNow = async () => {
    const res = await client.query({
      query: queryListArtworks,
      variables: { listArtworksAuction: false, listArtworksListed: true },
    });
    setArtworks(res.data.listArtworks);
  };

  const getAllHashtunes = async () => {
    const res = await client.query({
      query: queryListArtworks,
    });
    setArtworks(res.data.listArtworks);
  };

  useEffect(() => {
    if (tabState === "Auctions") {
      getAuctions();
    } else if (tabState === "Buy Now") {
      getBuyNow();
    } else {
      getAllHashtunes();
    }
  }, [tabState]);

  return (
    <div className={styles["artworks"] + " container"}>
      <div className="tab-nav tab-nav__container">
        <div className="tab-nav__indicators">
          <a
            className="tab-nav__indicators--element"
            onClick={() => setTabState("All Hashtunes")}
          >
            All Hashtunes
          </a>
          <a
            className="tab-nav__indicators--element"
            onClick={() => setTabState("Auctions")}
          >
            Auctions
          </a>
          <a
            className="tab-nav__indicators--element"
            onClick={() => setTabState("Buy Now")}
          >
            Buy Now
          </a>
        </div>
        <div className="tab-nav__dropdown">
          <SortDropDown />
        </div>
      </div>

      <div className={styles["artworks__container"]}>
        {artworks.length > 0 &&
          artworks?.map((artwork) => (
            <div key={artwork.id} className={styles["artworks__artwork"]}>
              <Link href={`/${artwork.creator.handle}/${artwork.id}`}>
                <a>
                  <ListArtwork artwork={artwork} />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ArtworkContainer;
