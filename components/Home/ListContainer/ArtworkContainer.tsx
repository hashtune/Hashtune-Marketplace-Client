import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import fetchData from '../../../lib/artworks'
import ListArtwork from "../ListArtwork/ListArtwork";
import Tab from '../../Layout/Navbar/Tab'
import { useRouter } from "next/dist/client/router";
import {ListArtworksFieldsProp} from '../../../lib/interfaces/ArtworkInterfaces'

const ArtworkContainer = (props: ListArtworksFieldsProp) => {
const { query } = useRouter();
  const isAllHashtunesSelected = !!query.allHashtunes;
  const isAuctionsSelected = !!query.auctions;
  const isBuyNowSelected = !!query.buyNow;

    return (
        <div>
            <Tab href="/?allHashtunes=true" title="All Hashtunes" isSelected={isAllHashtunesSelected} /> 
            <Tab href="/?auctions=true" title="Auctions" isSelected={isAuctionsSelected} />
            <Tab href="/?buyNow=true" title="Buy Now" isSelected={isBuyNowSelected} /> 
            {/* <InfiniteScroll next={fetchData} hasMore={} children={fetchData} loader={undefined} dataLength={undefined}> */}
             <ul> 
                {props.artworks.map(artwork => (
                    <li key={artwork.id}>
                        <ListArtwork artwork={artwork} />
                    </li>
                ))}
            </ul>
            {/* </InfiniteScroll> */}
        </div>
    )
}
export default ArtworkContainer