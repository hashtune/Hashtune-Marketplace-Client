import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import client from "../../apollo-client";
import React from "react";
import Layout from "../../components/Layout/layout";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { user } = ctx.query;
  console.log({ user });
  const singleUser = await client.query({
    query: gql`
      query Query($findUserHandle: String!) {
        findUser(handle: $findUserHandle) {
          handle
          email
          fullName
        }
      }
    `,
    variables: { findUserHandle: user },
  });
  console.log({ singleUser });
  if (singleUser.data.findUser) {
    return {
      props: {
        singleUser: singleUser.data.findUser,
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
    <Layout>
      <>
        <h3>{singleUser.singleUser.handle}</h3>
        <h3>{singleUser.singleUser.email}</h3>
        <h3>{singleUser.singleUser.fullName}</h3>
      </>
    </Layout>
  );
}