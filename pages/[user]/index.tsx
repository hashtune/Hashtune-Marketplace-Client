import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./User.module.scss";

import client from "../../lib/apollo-client";
import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { randomMockMedia } from "../../utils/index";
import ListArtwork from "../../components/ListArtwork/ListArtwork";
import SortDropDown from "../../components/ArtworkContainer/SortDropdown";
import { queryProfileData } from "../../graphql/user/queries/profileData";
import { Artwork, User } from "../../graphql/generated/apolloComponents";
import { LinkIcons } from "../../components/Layout/LinkIcons/LinkIcons";
import { PAGES } from "../../utils/constants/enum";
import ImageNameHandle from "../../components/Badges/ImageNameHandle";
import PagesManifestPlugin from "next/dist/build/webpack/plugins/pages-manifest-plugin";
import ArtworkContainer from "../../components/ArtworkContainer/ArtworkContainer";

// TODO: Refactor page/query

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { user } = ctx.query;
  const singleUser = await client.query({
    query: queryProfileData,
    variables: { handle: user },
  });
  const userData = singleUser.data.findUser.Users;
  if (userData && userData[0]) {
    return {
      props: {
        singleUser: userData[0],
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

const artworkImage = `/dist/images/mock/artworks/${randomMockMedia(19)}.png`;
export default function Profile(singleUser: any) {
  // TODO: If this user does not exist then return 404
  const artworkContainer: React.RefObject<HTMLDivElement> = useRef(null);
  const creator: User = singleUser.singleUser;
  return (
    <div className="profile">
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
          <ImageNameHandle
            profilePicture={profilePicture}
            handle={creator.handle}
            isApprovedCreator={creator.isApprovedCreator}
            fullName={creator.fullName}
            page={PAGES.PROFILE}
          />
          <div className={styles["user-profile-content"]}>
            <aside className={styles["user-profile-content__sidebar"]}>
              <div className={styles["user-profile-content__sidebar-section"]}>
                <h3 className={"title-underlined-profile"}>Bio</h3>
                {creator.bio}
              </div>
              <div className={styles["user-profile-content__sidebar-section"]}>
                <h3 className={"title-underlined-profile"}>Links</h3>
                <LinkIcons
                  iconRefs={[
                    { icon: "globe", href: '""' },
                    { icon: "twitter", href: '""' },
                    { icon: "instagram", href: '""' },
                    { icon: "youtube", href: '""' },
                  ]}
                  directorydifference={0}
                  page={PAGES.PROFILE}
                />
              </div>
            </aside>
            <div className={styles["user-profile-content__artworks"]}>
              <ArtworkContainer
                artworks={creator.created}
                creator={creator}
                tabs={["Created", "Collected"]}
                page={PAGES.PROFILE}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
