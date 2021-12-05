
import React, { useEffect, useState } from "react";
import router from "next/router";
import { Navbar } from "../../../components/Layout/Navbar/Navbar";
import styles from "./SingleArtwork.module.scss";
import Image from "next/dist/client/image";
import CreatorIconHandle from "../../../components/Home/ListCreator/CreatorIconHandle";
import Countdown from "../../../components/Home/Hero/Countdown";
import ArtworkHistoryItem from "../../../components/Artwork/ArtworkHistoryItem";
import { AudioPlayerContext } from "../../../hooks/audioPlayer";
import { Session } from "../../../hooks/session";
import { useFindArtworkQuery } from "../../../graphql/generated/apolloComponents";

export { getServerSideProps } from "../../../hooks/session";

export default function Artwork({ session }: { session: Session }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  let handle = "";
  if (typeof window !== "undefined") {
    handle = router.query.artwork as string;
  }
  const { data: singleArtwork, loading, error } = useFindArtworkQuery({
    variables: {
      findArtworkHandle: handle,
    },
  });
  
  if (!singleArtwork?.findArtwork.Artworks?.[0]) {
    return <></>
  }


  const artwork = singleArtwork?.findArtwork.Artworks?.[0]!;

  const { playOrPause } = React.useContext(AudioPlayerContext);

  function handleClick(url: string) {
    playOrPause(url, "exmaple", "anytitle");
  }

  
  // let cover = artwork.image || "/";
  let coverImage = "/images/artwork.png"; //Should be from database but that breaks it

  let date = new Date("30 10 2021 13:00:00");
  let creatorImage = "/dist/images/mock/users/26.png";
  let playButton = "/dist/play-button.svg";
  let wav = "/dist/wavFile.png";

  return (
    <div>
      <Navbar session={session} />
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
                  handle={artwork.creator.handle}
                />
                <div className={styles["hero__hashtune-details--header"]}>
                  <h3 className={styles["hero__hashtune-details--title"]}>
                    {artwork.title}
                  </h3>
                  <div className="dot_divider" />
                  <a className={styles["hero__hashtune-details--creator-name"]}>
                    {artwork.creator.fullName}
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
                  </a>
                </div>
                <div className={styles["hero__hashtune-details--description"]}>
                  <p>{artwork.handle}</p>
                </div>
                <div className={styles["hero__hashtune-details--description"]}>
                  <p>{artwork.description}</p>
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
                      onClick={() => handleClick("/dist/audio/4.mp3")}
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
                {artwork.description}
              </div>
            </div>
            <div className={styles["artwork__creator"]}>
              <div className={styles["artwork__creator--title"]}>Creator</div>
              <div className={styles["artwork__creator--info"]}>
                <div className={styles["artwork__creator--header"]}>
                  <div className={styles["artwork__creator--image"]}>
                    <Image
                      alt={"creator image"}
                      src={creatorImage}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles["artwork__creator--name-handle"]}>
                    <div className={styles["artwork__creator--name-approved"]}>
                      <a className={styles["artwork__creator--name"]}>
                        {artwork.creator.fullName}
                      </a>
                      {artwork.creator.isApprovedCreator ? (
                        <svg>
                          <use xlinkHref="dist/icons/sprite.svg#hashtune-check" />
                        </svg>
                      ) : (
                        <></>
                      )}
                    </div>
                    <a className={styles["artwork__creator--handle"]}>
                      @{artwork.creator.handle}
                    </a>
                  </div>
                </div>
                <div className={styles["artwork__creator--bio"]}>
                  {artwork.creator.bio}
                </div>
                <div className={styles["artwork__creator--socials"]}>
                  <a href="">
                    <svg>
                      <use xlinkHref="../dist/icons/sprite.svg#hashtune-globe" />
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use xlinkHref="../dist/icons/sprite.svg#hashtune-twitter" />
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use xlinkHref="../dist/icons/sprite.svg#hashtune-instagram" />
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use xlinkHref="../dist/icons/sprite.svg#hashtune-youtube" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["nft"] + " container"}>
            <div className={styles["nft__details"]}>
              <div className={styles["nft__details--title"]}>NFT Details</div>
              <div className={styles["nft__details--info"]}>
                <div className={styles["nft__details--top"]}>
                  {/* <div className={styles["nft__details--price"]}> */}
                  <div className={styles["nft__details--price"]}>
                    <div>Reserve Price</div>
                    <div>1378 BNB</div>
                    <div>$1,220</div>
                  </div>
                  <Countdown liveAt={date} style="countdown_card-small" />
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
                  artwork={artwork}
                  actor={"sophiekahn"}
                />
                <ArtworkHistoryItem
                  imgSrc={coverImage}
                  listed={true}
                  date={"Sep 22, 2021 at 3:39am"}
                  artwork={artwork}
                  actor={"sophiekahn"}
                />
                <ArtworkHistoryItem
                  imgSrc={coverImage}
                  listed={false}
                  date={"Sep 22, 2021 at 3:39am"}
                  artwork={artwork}
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

{
  /* <button onClick={refreshData}>GET NEW DATA</button>
          <h3>{singleArtwork.artwork.handle}</h3>
          <h3>{singleArtwork.artwork.title}</h3>
          <h3>{singleArtwork.artwork.image}</h3>
          <h3>{singleArtwork.artwork.creator.id}</h3>
          <h3>{singleArtwork.artwork.creator.fullName}</h3>
          <Link href={`/${singleArtwork.artwork.creator.handle}`}>
            {singleArtwork.artwork.creator.handle}
          </Link>
          <h3>{singleArtwork.artwork.saleType}</h3>
          <h3>{singleArtwork.artwork.lsited}</h3>
          <h3>{singleArtwork.artwork.price}</h3>
          <h3>{singleArtwork.artwork.reservePrice}</h3> */
}
