import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import styles from "./User.module.scss";

import client from "../../lib/apollo-client";
import React from "react";
import { Navbar } from "../../components/Layout/Navbar/Navbar";
import { randomMockMedia } from "../../utils/index";

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

// const profilePicture = `/dist/images/mock/users/${randomMockMedia(12)}.png`;
const profilePicture = `/dist/images/mock/users/15.png`;
const coverImage = `/dist/cover.png`;

export default function User(singleUser: any) {
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

        <div className="container">
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
          </div>
        </div>
      </main>
    </div>
  );
}
