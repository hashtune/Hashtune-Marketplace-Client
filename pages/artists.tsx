import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from "next";
import { queryCreators } from "../lib/apiQueries/CreatorQueries";
import client from "../apollo-client";
import { ListCreatorFields, ListCreatorFieldsProp } from "../lib/interfaces/CreatorInterfaces";
import React from "react";
import CreatorContainer from "../components/Home/ListContainer/CreatorContainer";
import Layout from "../components/Layout/layout";

export async function getServerSideProps(){
  const { data } = await client.query({
    query: queryCreators,
  });
  return {
    props: {
      allCreators: data.listCreators.slice(0, 20),
      fallback: true,
    },
  };
};
export default function Creators({allCreators}: {allCreators: ListCreatorFields[]}){
  return (
    <Layout home>
      <CreatorContainer creators={allCreators} />
    </Layout>
  )
}

