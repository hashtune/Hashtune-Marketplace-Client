import { GetServerSidePropsContext } from "next";
import client from "../../../lib/apollo-client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./SingleArtwork.module.scss";
import Image from "next/dist/client/image";
import CreatorImageHandle from "../../../components/Badges/CreatorImageHandle";
import Countdown from "../../../components/Hero/Countdown";
import ArtworkHistoryItem from "../../../components/Badges/ArtworkHistoryItem";
import { artworkQuery } from "../../../graphql/artwork/queries/artwork";
import { Artwork } from "../../../graphql/generated/apolloComponents";
import { PAGES } from "../../../utils/constants/enum";
import { LinkIcon } from "../../../components/Layout/LinkIcons/LinkIcon";
import ImageNameHandle from "../../../components/Badges/ImageNameHandle";
import { LinkIcons } from "../../../components/Layout/LinkIcons/LinkIcons";
import Hero from "../../../components/Hero/Hero";
import { priceInformation } from "../../../components/ListArtwork/Price";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // console.log(ctx);
  // console.log("GET SERVER SIDE PROPS CALLED");
  const { user, artwork } = ctx.query;
  const singleArtwork = await client.query({
    query: artworkQuery,
    variables: { findArtworkId: artwork },
  });
  if (
    singleArtwork.data.findArtwork.Artworks &&
    singleArtwork.data.findArtwork.Artworks[0]
  ) {
    return {
      props: {
        artwork: singleArtwork.data.findArtwork.Artworks[0],
      },
    };
  }
  return {
    props: {
      artwork: null,
    },
  };
}

export default function SingleArtwork(artwork: any) {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  let singleArtwork: Artwork = artwork.artwork;

  const refreshData = () => {
    console.log("refreshing");
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  useEffect(() => {
    if (singleArtwork !== null) setIsRefreshing(false);
  }, [singleArtwork]);
  // Should be from database but that breaks it
  let coverImage = "/images/artwork.png";

  let date = new Date("30 10 2021 13:00:00");
  let creatorImage = "/dist/images/mock/users/26.png";
  let playButton = "/dist/play-button.svg";
  let wav = "/dist/wavFile.png";

  let priceText = priceInformation(singleArtwork);

  return (
    <div>
      <Navbar />
      {isRefreshing ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <Hero artwork={singleArtwork} page={PAGES.ARTWORK} />
          <div className={styles["artwork"] + " container"}>
            <div className={styles["artwork__details"]}>
              <div className={"title-underlined"}>Music Details</div>
              <div className={styles["artwork__details--description"]}>
                {singleArtwork.description}
              </div>
            </div>
            <div className={styles["artwork__creator"]}>
              <div className={"title"}>Creator</div>
              <div className={styles["artwork__creator--info"]}>
                <ImageNameHandle
                  profilePicture={creatorImage}
                  handle={singleArtwork.creator.handle}
                  isApprovedCreator={singleArtwork.creator.isApprovedCreator}
                  fullName={singleArtwork.creator.handle}
                  page={PAGES.ARTWORK}
                />
                <div className={styles["artwork__creator--bio"]}>
                  {singleArtwork.creator.bio}
                </div>
                <LinkIcons
                  iconRefs={[
                    { icon: "globe", href: '""' },
                    { icon: "twitter", href: '""' },
                    { icon: "instagram", href: '""' },
                    { icon: "youtube", href: '""' },
                  ]}
                  directorydifference={1}
                  page={PAGES.ARTWORK}
                />
              </div>
            </div>
          </div>
          <div className={styles["nft"] + " container"}>
            <div className={styles["nft__details"]}>
              <div className={"title"}>NFT Details</div>
              <div className={styles["nft__details--info"]}>
                <div className={styles["nft__details--top"]}>
                  <div className={styles["nft__details--price"]}>
                    <div>{priceText[0]}</div>
                    <div>{priceText[1]}</div>
                    <div>$1,220</div>
                  </div>
                  <Countdown liveAt={date} page={PAGES.ARTWORK} />
                </div>
                <div className={styles["nft__details--btn"]}>
                  <div className={styles["nft__details--btn-inner"]}>
                    Make an offer
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["nft__history"]}>
              <div className={"title"}>Album History</div>
              <div className={styles["nft__history--items"]}>
                {/* HARDCODED LISTED, IMG, DATE */}
                <ArtworkHistoryItem
                  imgSrc={coverImage}
                  listed={false}
                  date={"Sep 22, 2021 at 3:39am"}
                  artwork={singleArtwork}
                  actor={"sophiekahn"}
                />
                <ArtworkHistoryItem
                  imgSrc={coverImage}
                  listed={true}
                  date={"Sep 22, 2021 at 3:39am"}
                  artwork={singleArtwork}
                  actor={"sophiekahn"}
                />
                <ArtworkHistoryItem
                  imgSrc={coverImage}
                  listed={false}
                  date={"Sep 22, 2021 at 3:39am"}
                  artwork={singleArtwork}
                  actor={"sophiekahn"}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
