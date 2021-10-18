import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./User.module.scss";

import client from "../../lib/apollo-client";
import React from "react";
import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { randomMockMedia } from "../../utils/index";
import { CreatorFields } from "../../lib/interfaces/CreatorInterfaces";

// TODO: Refactor page/query

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { user } = ctx.query;
  const singleUser = await client.query({
    query: gql`
      query Query($handle: String!) {
        findUser(handle: $handle) {
          Users {
            fullName
            handle
            email
            bio
            image
            isApprovedCreator
            wallet {
              provider
              publicKey
            }
            created {
              kind
              handle
              title
              id
              image
              description
              listed
              price
              reservePrice
              saleType
              Auctions {
                id
                currentHigh
                liveAt
                artworkId
              }
            }
          }
        }
      }
    `,
    variables: { handle: user },
  });

  if (singleUser.data.findUser.Users[0]) {
    return {
      props: {
        singleUser: singleUser.data.findUser.Users[0],
      },
    };
  }

  return {
    props: {
      singleUser: null,
    },
  };
}

const profilePicture = `/dist/images/mock/users/${randomMockMedia(12)}.png`;
// const profilePicture = `/dist/images/mock/users/15.png`;
const coverImage = `/dist/cover.png`;

const artworkImage = `/dist/images/mock/artworks/${randomMockMedia(20)}.png`;
export default function User(singleUser: any) {
  console.log(singleUser.singleUser.created);
  return (
    <div>
      <Navbar />
      <main>
        <div className={styles["user-profile"]}>
          <div className={styles["user-profile__cover"]}>
            <Image
              alt="list cover image"
              src={coverImage}
              className={styles["user-profile__cover--image"]}
              layout="fill"
            />
          </div>
        </div>

        <div className="container_relative">
          <div className={styles["user-profile-details"]}>
            <div className={styles["user-profile-details__picture"]}>
              <Image src={profilePicture} width="180" height="180" alt="" />
            </div>
            <div className={styles["user-profile-details__content"]}>
              <div className={styles["user-profile-details__content-primary"]}>
                <div
                  className={
                    styles["user-profile-details__content--name-status"]
                  }
                >
                  {singleUser.singleUser.fullName}
                  {singleUser.singleUser.isApprovedCreator ? (
                    <div
                      className={styles["user-profile-details__content-status"]}
                    >
                      <svg fill="#fff">
                        <use xlinkHref="dist/icons/sprite.svg#hashtune-check"></use>
                      </svg>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <p
                  className={styles["user-profile-details__content--username"]}
                >
                  @{singleUser.singleUser.handle}
                </p>
              </div>
            </div>
            <a
              href={`/${singleUser.singleUser.handle}/edit-profile`}
              className={styles["user-profile-details--edit-button"] + " btn"}
            >
              Edit Profile
            </a>
          </div>

          <div className={styles["user-profile-content"]}>
            <aside className={styles["user-profile-content__sidebar"]}>
              <div className={styles["user-profile-content__sidebar-section"]}>
                <h3>Bio</h3>
                {singleUser.singleUser.bio}
              </div>
              <div className={styles["user-profile-content__sidebar-section"]}>
                <h3>Links</h3>
                <div
                  className={
                    styles["user-profile-content__sidebar-section__socials"]
                  }
                >
                  <a href="">
                    <svg>
                      <use xlinkHref="dist/icons/sprite.svg#hashtune-globe"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use xlinkHref="dist/icons/sprite.svg#hashtune-twitter"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use xlinkHref="dist/icons/sprite.svg#hashtune-instagram"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg>
                      <use xlinkHref="dist/icons/sprite.svg#hashtune-youtube"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
            <div className={styles["user-profile-content__artworks"]}>
              <div className={styles["artworks"] + " container"}>
                <div className={"tab-nav" + " " + "tab-nav__container"}>
                  <div className="tab-nav__indicators">
                    <a
                      className="tab-nav__indicators--element"
                      // onClick={() => setTabState("All Hashtunes")}
                    >
                      Created
                    </a>
                    <a
                      className="tab-nav__indicators--element"
                      // onClick={() => setTabState("Auctions")}
                    >
                      Collected
                    </a>
                    <a
                      className="tab-nav__indicators--element"
                      // onClick={() => setTabState("Buy Now")}
                    ></a>
                  </div>
                  <div className="tab-nav__dropdown">
                    {/* <SortDropDown /> */}
                  </div>
                </div>

                <div className={styles["artworks__container"]}>
                  {singleUser.singleUser.created.length > 0 &&
                    singleUser.singleUser.created?.map(
                      (userArtworks: CreatorFields) => (
                        <div
                          key={userArtworks.id}
                          className={styles["artworks__artwork"]}
                        >
                          <Link
                            href={`/${userArtworks.handle}/${userArtworks.id}`}
                          >
                            <a>
                              <div className="artworks__artwork_data">
                                <div
                                  className={
                                    styles[
                                      "artworks__artwork_data--image-container"
                                    ]
                                  }
                                >
                                  <Image
                                    alt="list cover image"
                                    src={artworkImage}
                                    width={280}
                                    height={280}
                                    className={
                                      styles["artworks__artwork_data--image"]
                                    }
                                  />
                                </div>
                                <div
                                  className={
                                    styles["artworks__artwork_data--content"]
                                  }
                                >
                                  <div
                                    className={
                                      styles["artworks__artwork_data--content"]
                                    }
                                  >
                                    <div data-cy="artwork-title-creator">
                                      <h3 data-cy="artwork-title">
                                        {userArtworks.title}
                                      </h3>
                                      <p data-cy="artwork-creator-fullName">
                                        {userArtworks.fullName}
                                      </p>
                                    </div>
                                    <div className="sales-type-badge">
                                      <h3>Make an offer</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
