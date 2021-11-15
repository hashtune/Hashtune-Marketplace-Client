import { listCreatorsQuery } from "../graphql/user/queries/listApprovedCreators";
import client from "../lib/apollo-client";
import React from "react";
import CreatorContainer from "../components/ListCreator/CreatorContainer";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import { User } from "../graphql/generated/apolloComponents";

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
export default function Creators({ allCreators }: { allCreators: User[] }) {
  return (
    <div>
      <Navbar />
      <CreatorContainer creators={allCreators} />
    </div>
  );
}
