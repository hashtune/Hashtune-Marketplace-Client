import React from "react";
import { ArtworkProp } from "../ListArtwork/ListArtwork";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchData from '../../../lib/artworks'
import ListArtwork from "../ListArtwork/ListArtwork";
import Tab from '../../Layout/Navbar/Tab'
import { useRouter } from "next/dist/client/router";

const ArtworkContainer = (props: ArtworkProp[]) => {
const { query } = useRouter();
  const isAllHashtunesSelected = !!query.allHashtunes;
  const isAuctionsSelected = !!query.auctions;
  const isBuyNowSelected = !!query.buyNow;
    return (
        <div>
            <Tab href={""} isSelected={false} title={""}/>
            <Tab href="/?allHashtunes=true" title="All Hashtunes" isSelected={isAllHashtunesSelected} /> 
            <Tab href="/?auctions=true" title="Auctions" isSelected={isAuctionsSelected} />
            <Tab href="/?buyNow=true" title="Buy Now" isSelected={isBuyNowSelected} /> 
            <InfiniteScroll next={fetchData} hasMore={} children={fetchData} loader={undefined} dataLength={undefined}>
                <ul> 
                    {props.map(prop => (
                        <li key={prop.artwork.id}>
                            <ListArtwork artwork={prop.artwork} />
                        </li>
                ))}
                </ul>
            </InfiniteScroll>
        </div>
    )
}
export default ArtworkContainer