import React, { useEffect, useState } from "react";
import styles from "./Artwork.module.scss";
import ListArtwork from "../ListArtwork/ListArtwork";
import { ListArtworksFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import client from "../../../lib/apollo-client";
import SortDropDown from "./SortDropdown";
import { listArtworkQuery } from "../../../graphql/artwork/queries/listArtworks";

const ArtworkContainer = (props: ListArtworksFieldsProp) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [tabState, setTabState] = useState("All Hashtunes");
  let playButton = "/dist/play-button.svg";

  const getAuctions = async () => {
    const res = await client.query({
      query: listArtworkQuery,
      variables: { listArtworksAuction: true, listArtworksListed: true },
    });
    setArtworks(res.data.listArtworks.Artworks);
  };

  const getBuyNow = async () => {
    const res = await client.query({
      query: listArtworkQuery,
      variables: { listArtworksAuction: false, listArtworksListed: true },
    });
    setArtworks(res.data.listArtworks.Artworks);
  };

  const getAllHashtunes = async () => {
    const res = await client.query({
      query: listArtworkQuery,
    });
    setArtworks(res.data.listArtworks.Artworks);
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
            className={tabState === "All Hashtunes" ? "tab-nav__indicators--element-active" : "tab-nav__indicators--element"}
            onClick={() => setTabState("All Hashtunes")}

          >
            All Hashtunes
          </a>
          <a
            className={tabState === "Auctions" ? "tab-nav__indicators--element-active" : "tab-nav__indicators--element"}
            onClick={() => setTabState("Auctions")}
          >
            Auctions
          </a>
          <a
            className={tabState === "Buy Now" ? "tab-nav__indicators--element-active" : "tab-nav__indicators--element"}
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
            <div key={artwork.id} className={styles["artworks__item"]}>
                
                  <ListArtwork imageSize={368} artwork={artwork} />
                
            </div>
          ))}
      </div>
    </div>
  );
};
export default ArtworkContainer;
