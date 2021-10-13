import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import client from "../../lib/apollo-client";
import React from "react";
import { Navbar } from "../../components/Layout/Navbar/Navbar";

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

export default function User(singleUser: any) {
  return (
    <div>
      <Navbar />
      <>
        <br />
        <br />
        <br />
        <br />
        <div>{singleUser.singleUser.email}</div>
        <h3>{singleUser.singleUser.handle}</h3>
        <h3>{singleUser.singleUser.email}</h3>
        <h3>{singleUser.singleUser.fullName}</h3>
      </>
    </div>
  );
}
