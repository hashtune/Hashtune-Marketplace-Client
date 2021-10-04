import React, { useEffect, useState } from "react";
import styles from "./Artwork.module.scss";
import ListArtwork from "../ListArtwork/ListArtwork";
import { ListArtworksFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";
import client from "../../../apollo-client";
import { queryListAuctions } from "../../../lib/apiQueries/ArtworkQueries";


const ArtworkContainer = (props: ListArtworksFieldsProp, ) => {
    const [artworks, setArtworks] = useState(props.artworks)

    const getAuctions = async() => {
        const res = await client.query({
            query: queryListAuctions,
            variables : {listArtworksAuction : true,
                        listArtworksListed: true}
        });
        setArtworks(res.data.listArtworks)
    }

    const getBuyNow = async() => {
        const res = await client.query({
            query: queryListAuctions,
            variables : {listArtworksAuction : false,
                        listArtworksListed: true}
        })
        setArtworks(res.data.listArtworks);
    }

    useEffect(() => {
      if (props.type === 'Auctions'){
        getAuctions();
      } else if (props.type ==='Buy Now'){
        getBuyNow();
      }
      
  }, [])
  return (
    <div>
      <div className={styles.artworkContainer}>
        {artworks.length>0 && artworks?.map((artwork) => (
          <div key={artwork.id} className={styles.item}>
            <Link href={`/${artwork.creator.handle}/${artwork.id}`}><a><ListArtwork artwork={artwork} /></a></Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArtworkContainer;
