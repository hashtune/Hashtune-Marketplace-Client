import { GetServerSidePropsContext } from "next";
import client from "../../../lib/apollo-client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./SingleArtwork.module.scss";
import Image from "next/dist/client/image";
import CreatorIconHandle from "../../../components/Home/ListCreator/CreatorIconHandle";
import Countdown from "../../../components/Home/Hero/Countdown";
import ArtworkHistoryItem from "../../../components/Artwork/ArtworkHistoryItem";
import { artworkQuery } from "../../../graphql/artwork/queries/artwork";
import { Artwork } from "../../../graphql/generated/apolloComponents";
import { PAGES } from "../../../utils/constants/enum";
import { LinkIcon } from "../../../components/Layout/BurgerMenu/LinkIcon";
import { Socials } from "../../../components/Layout/BurgerMenu/Socials";
import ImageNameHandle from "../../../components/ImageNameHandle";

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

  return (
    <div>
      <Navbar />
      {isRefreshing ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <div className={styles["hero"]}>
            <div className={styles["hero__container"] + " container"}>
              <div className={styles["hero__hashtune-artwork"]}>
                <div className={styles["hero__hashtune-artwork--image"]}>
                  <Image
                    alt="cover image"
                    src={coverImage}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
              <div className={styles["hero__hashtune-details"]}>
                <CreatorIconHandle
                  image={creatorImage}
                  handle={singleArtwork.creator.handle}
                />
                <div className={styles["hero__hashtune-details--header"]}>
                  <a className={styles["hero__hashtune-details--title"]}>
                    {singleArtwork.title}
                  </a>
                  <div className={styles["dot_divider"] + " dot_divider"} />
                  <div
                    className={styles["hero__hashtune-details--creator-name"]}
                  >
                    {singleArtwork.creator.fullName}
                  </div>
                  <div className={styles["hero__hashtune-details--downloads"]}>
                    <a href="">
                      <div
                        className={styles["hero__hashtune-details--tooltip-1"]}
                      >
                        Logic Pro X<span />
                      </div>
                      <svg>
                        <use xlinkHref="../dist/icons/sprite.svg#hashtune-logic-pro-x" />
                      </svg>
                    </a>
                    <a href="">
                      <div
                        className={styles["hero__hashtune-details--tooltip-2"]}
                      >
                        Wave File
                        <span />
                      </div>
                      <svg>
                        <use xlinkHref="../dist/icons/sprite.svg#hashtune-wave-file" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className={styles["hero__hashtune-details--description"]}>
                  <p>{singleArtwork.description}</p>
                </div>
                <div className={styles["hero__hashtune-details--footer"]}>
                  <div
                    className={styles["hero__hashtune-details--play-button"]}
                  >
                    <Image
                      alt="cover image"
                      src={playButton}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <div className={styles["hero__hashtune-details--wave"]}>
                      <Image
                        alt="cover image"
                        src={wav}
                        width={800}
                        height={100}
                      />
                    </div>
                    <div className={styles["hero__hashtune-details--times"]}>
                      <a>2:51</a>
                      <a>3:53</a>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    styles["hero__hashtune-auction-details"] + " mb-medium"
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles["artwork"] + " container"}>
            <div className={styles["artwork__details"]}>
              <div className={styles["artwork__details--title"]}>
                Music Details
              </div>
              <div className={styles["artwork__details--description"]}>
                {singleArtwork.description}
              </div>
            </div>
            <div className={styles["artwork__creator"]}>
              <div className={styles["artwork__creator--title"]}>Creator</div>
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
                <Socials
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
              <div className={styles["nft__details--title"]}>NFT Details</div>
              <div className={styles["nft__details--info"]}>
                <div className={styles["nft__details--top"]}>
                  <div className={styles["nft__details--price"]}>
                    <div>Reserve Price</div>
                    <div>1378 BNB</div>
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
              <div className={styles["nft__history--title"]}>Album History</div>
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
