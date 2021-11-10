import React, { useEffect, useState } from "react";
import styles from "./Artwork.module.scss";
import ListArtwork from "../ListArtwork/ListArtwork";
import { ListArtworksProps } from "../../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";
import client from "../../../lib/apollo-client";
import { Artwork, QueryListArtworksQuery } from "../../../graphql/generated/apolloComponents";
import SortDropDown from "./SortDropdown";
import { listArtworkQuery } from "../../../graphql/artwork/queries/listArtworks";
import { DocumentNode } from "graphql";
import Tab from "./Tab";

export interface TabArtworksProps {
  artworks: Artwork[];
  type: string;
  tabs: string[];
}

const ArtworkContainer = (props: TabArtworksProps) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [tabState, setTabState] = useState("All Hashtunes");

  useEffect(() => {
    
    if (tabState === "Auctions") {
      getAuctions();
    } else if (tabState === "Buy Now") {
      getBuyNow();
    } else {
      getAllHashtunes();
    }
  }, [tabState]);

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


  return (
    <div className={styles["artworks"] + " container"}>
      <div className="tab-nav tab-nav__container">

        <div className="tab-nav__indicators">
          {props.tabs!== undefined && props.tabs.length > 0 &&
          props.tabs?.map((tab) => (
            <Tab onClick={() => setTabState(tab)} style={"tab-nav__indicators--element"} text={tab}/>
          ))}
        <div className="tab-nav__dropdown">
          <SortDropDown />
        </div>
      </div>

      <div className={styles["artworks__container"]}>
        {artworks.length > 0 &&
          artworks?.map((artwork) => (
            <div key={artwork.id} className={styles["artworks__item"]}>
              <Link href={`/${artwork.creator.handle}/${artwork.id}`}>
                <a>
                  <ListArtwork imageSize={368} artwork={artwork} />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
    
        </div>
  );
};
export default ArtworkContainer;
