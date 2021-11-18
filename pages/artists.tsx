import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";
import { listCreatorsQuery } from "../graphql/user/queries/listApprovedCreators";
import client from "../lib/apollo-client";
import {
  ListCreatorFields,
  ListCreatorFieldsProp,
} from "../lib/interfaces/CreatorInterfaces";
import React from "react";
import CreatorContainer from "../components/Home/ListContainer/CreatorContainer";
import { Navbar } from "../components/Layout/Navbar/Navbar";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: listCreatorsQuery,
  });

  return {
    props: {
      allCreators: data.listCreators.Users.slice(0, 20),
      fallback: true,
    },
  };
}
export default function Creators({
  allCreators,
}: {
  allCreators: ListCreatorFields[];
}) {
  return (
    <div>
      <Navbar />
      <CreatorContainer creators={allCreators} />
    </div>
  );
}
