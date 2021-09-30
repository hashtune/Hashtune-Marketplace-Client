import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./Artwork.module.scss";
// import fetchData from '../../../lib/artworks'
import ListArtwork from "../ListArtwork/ListArtwork";
import Tab from "../../Layout/Navbar/Tab";
import { Router, useRouter } from "next/dist/client/router";
import { ListArtworksFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";
import { route } from "next/dist/server/router";

const ArtworkContainer = (props: ListArtworksFieldsProp) => {
  const { query } = useRouter();
  const isAllHashtunesSelected = !!query.allHashtunes;
  const isAuctionsSelected = !!query.auctions;
  const isBuyNowSelected = !!query.buyNow;

  return (
    <div>
      <Tab
        href="/?allHashtunes=true"
        title="All Hashtunes"
        isSelected={isAllHashtunesSelected}
      />
      <Tab
        href="/?auctions=true"
        title="Auctions"
        isSelected={isAuctionsSelected}
      />
      <Tab href="/?buyNow=true" title="Buy Now" isSelected={isBuyNowSelected} />
      {/* <InfiniteScroll next={fetchData} hasMore={} children={fetchData} loader={undefined} dataLength={undefined}> */}
      <div className={styles.artworkContainer}>
        {props.artworks.map((artwork) => (
          <div key={artwork.id} className={styles.item}>
            <Link href={`/${artwork.creator.handle}/${artwork.id}`}>
              <a>
                <ListArtwork artwork={artwork} />
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* </InfiniteScroll> */}
    </div>
  );
};
export default ArtworkContainer;
