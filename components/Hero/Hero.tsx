import { GetServerSideProps, GetServerSidePropsContext } from "next";
import client from "../../lib/apollo-client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Navbar } from "../Layout/Navbar/Navbar";
import styles from "./SingleArtwork.module.scss";
import Image from "next/dist/client/image";
import CreatorImageHandle from "../Badges/CreatorImageHandle";
import Countdown from "./Countdown";
import ArtworkHistoryItem from "../Badges/ArtworkHistoryItem";
import { artworkQuery } from "../../graphql/artwork/queries/artwork";
import { Artwork } from "../../graphql/generated/apolloComponents";
import { PAGES } from "../../utils/constants/enum";
import { LinkIcon } from "../Layout/LinkIcons/LinkIcon";
import ImageNameHandle from "../Badges/ImageNameHandle";
import { LinkIcons } from "../Layout/LinkIcons/LinkIcons";
import { ListArtworkProps } from "../../lib/interfaces/ArtworkInterfaces";
import { priceInformation } from "../ListArtwork/Price";

export interface Coin {
  symbol: string;
  currentPrice: number;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/binancecoin
    `);
  const data = await res.json();

  console.log("data" + data);
  return {
    props: {
      data: data.cur,
    },
  };
};

export default function Hero(props: ListArtworkProps, coin: Coin) {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);
  let artwork: Artwork = props.artwork;

  const refreshData = () => {
    console.log("refreshing");
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  const [style, setStyle] = useState("hero");

  useEffect(() => {
    if (artwork !== null) setIsRefreshing(false);
  }, [artwork]);

  useEffect(() => {
    if (props.page === PAGES.ARTWORK) {
      setStyle("hero-artwork");
    }
  });
  // Should be from database but that breaks it
  let coverImage = "/images/artwork.png";

  let date = new Date("30 10 2021 13:00:00");
  let creatorImage = "/dist/images/mock/users/26.png";
  let playButton = "/dist/play-button.svg";
  let wav = "/dist/wavFile.png";
  let priceText = priceInformation(artwork);

  return (
    <div>
      <Navbar />
      {isRefreshing ? (
        <h1>LOADING</h1>
      ) : (
        <>
          <div className={style}>
            <div className={style + "__container" + " container"}>
              <div className={style + "__artwork"}>
                <div className={style + "__artwork--image"}>
                  <Image
                    alt="cover image"
                    src={coverImage}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
              <div className={style + "__details"}>
                <CreatorImageHandle
                  image={creatorImage}
                  handle={artwork.creator.handle}
                />
                <div className={style + "__details--header"}>
                  <h1 className={style + "__details--title"}>
                    {artwork.title}
                  </h1>
                  {props.page === PAGES.ARTWORK ? (
                    <>
                      <div
                        className={style + "--dot-divider" + " dot_divider"}
                      />
                      <div className={style + "__details--creator-name"}>
                        {artwork.creator.fullName}
                      </div>
                      <div className={style + "__details--downloads"}>
                        <a href="">
                          <div className={style + "__details--tooltip-1"}>
                            Logic Pro X<span />
                          </div>
                          <svg>
                            <use xlinkHref="../dist/icons/sprite.svg#hashtune-logic-pro-x" />
                          </svg>
                        </a>
                        <a href="">
                          <div className={style + "__details--tooltip-2"}>
                            Wave File
                            <span />
                          </div>
                          <svg>
                            <use xlinkHref="wave-file" />
                          </svg>
                        </a>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={style + "__details--description"}>
                  <p>{artwork.description}</p>
                </div>

                {props.page === PAGES.ARTWORK ? (
                  <>
                    <div className={style + "__details--footer"}>
                      <div className={style + "__details--play-button"}>
                        <Image
                          alt="cover image"
                          src={playButton}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div>
                        <div className={style + "__details--wave"}>
                          <Image
                            alt="cover image"
                            src={wav}
                            width={800}
                            height={100}
                          />
                        </div>
                        <div className={style + "__details--times"}>
                          <a>2:51</a>
                          <a>3:53</a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={style + "__auction-details" + " mb-medium"}>
                      <div
                        className={
                          "price_card " +
                          style +
                          "__auction-details--price-card"
                        }
                      >
                        <h3 className="hero_card_title">{priceText[0]}</h3>
                        <div className="price_card-data">
                          <div className="price_card-data--crypto">
                            {priceText[1]}
                          </div>
                          <div className="price_card-data--divider" />
                          <div className="price_card-data--fiat">1200 $</div>
                        </div>
                      </div>
                      <div
                        className={
                          style +
                          "__auction-details--vertical-divider" +
                          " vertical_divider"
                        }
                      />
                      {/* UNCOMMENT BELOW ONCE LIVEAT IS THERE */}
                      {/* {artwork.auctions[lastAuctionIndex].liveAt} */}
                      <Countdown liveAt={date} />
                    </div>
                    <button className="music_action_button hero_music_action_button">
                      <h2>Place a bid</h2>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
