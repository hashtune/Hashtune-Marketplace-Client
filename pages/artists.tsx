import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from "next";
import { queryCreators } from "../lib/apiQueries/CreatorQueries";
import client from "../apollo-client";
import { ListCreatorFields, ListCreatorFieldsProp } from "../lib/interfaces/CreatorInterfaces";
import React from "react";
import CreatorContainer from "../components/Home/ListContainer/CreatorContainer";
import { Navbar } from "../components/Layout/Navbar/Navbar";

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
    <div>
      <Navbar/>
      <CreatorContainer creators={allCreators} />
    </div>
  )
}

