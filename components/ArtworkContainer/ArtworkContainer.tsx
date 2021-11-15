import React, { useEffect, useState } from "react";
import styles from "./Artwork.module.scss";
import ListArtwork from "../ListArtwork/ListArtwork";
import { ListArtworksProps } from "../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";
import client from "../../lib/apollo-client";
import { Artwork, QueryListArtworksQuery, User } from "../../graphql/generated/apolloComponents";
import SortDropDown from "./SortDropdown";
import { listArtworkQuery } from "../../graphql/artwork/queries/listArtworks";
import { DocumentNode } from "graphql";
import Tab from "./Tab";

export interface ArtworkContainerProps {
  artworks: Artwork[];
  creator?: User;
  tabs: string[];
  page: string;
}

const ArtworkContainer = (props: ArtworkContainerProps) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [tabState, setTabState] = useState(props.tabs[0]);
  const created = props.creator?.created!==undefined ? props.creator?.created : [];
  const owned = props.creator?.owned!==undefined ? props.creator?.owned : [];

  useEffect(() => {
     if (tabState== "Created"){
      setArtworks(created);
    } else if (tabState== "Collected"){
      setArtworks(owned);
    } else if (tabState=== "Auctions" || "Buy Now" || "All Hashtunes") {
      updateArtworks(tabState);
    }
  }, [tabState]);

  const updateArtworks= async(tab: string) => {
    let listed : boolean = true;
    let auction : boolean = false;
    if (tab==="Auctions"){
      auction = true;
    } else if (tab==="Buy Now"){
      auction = false;
    }
    const res = await client.query({
      query: listArtworkQuery,
      variables: tab!=="All Hashtunes" ? { auction, listed }: { }
    });
    setArtworks(res.data.listArtworks.Artworks);
  }


  return (
    <div className={styles["artworks"] + " container"}>
      <div className="tab-nav tab-nav__container">
        <div className="tab-nav__indicators">
          {props.tabs!== undefined && props.tabs.length > 0 &&
          props.tabs?.map((tab) => (
            <Tab onClick={() => {
              setTabState(tab);
            } } text={tab} key={tab}/>
          ))}
          
      </div>
        <div className="tab-nav__dropdown">
          <SortDropDown />
        </div>
      </div>
      <div className={styles["artworks__container"]}>
        {artworks !== undefined && artworks.length > 0 &&
          artworks?.map((artwork) => (
            <div key={artwork.id} className={styles["artworks__item"]}>
              <Link href={`/${artwork.creator.handle}/${artwork.id}`}>
                <a>
                  <ListArtwork page = {props.page} imageSize={368} artwork={artwork} />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ArtworkContainer;
