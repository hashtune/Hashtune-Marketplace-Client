import { GetStaticProps } from "next";
import client from "../lib/apollo-client";
import React from "react";
import Hero from "../components/Home/Hero/Hero";
import { useRouter } from "next/dist/client/router";
import ArtworkContainer from "../components/Home/ListContainer/ArtworkContainer";
import CreatorContainer from "../components/Home/ListContainer/CreatorContainer";
import { ListCreatorFields } from "../lib/interfaces/CreatorInterfaces";
import { ArtworkFields } from "../lib/interfaces/ArtworkInterfaces";
import { listArtworkQuery } from "../graphql/artwork/queries/listArtworks";
import { Navbar } from "../components/Layout/Navbar/Navbar";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: listArtworkQuery,
  });
  return {
    props: {
      allArtworks: data.listArtworks.Artworks.slice(0, 10),
      fallback: true,
    },
    revalidate: 180,
  };
};

export default function Home({
  allArtworks,
}: {
  allArtworks: ArtworkFields[];
}) {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero artwork={allArtworks[0]} />
        <ArtworkContainer type={"All Hashtunes"} artworks={allArtworks} />
      </main>
    </div>
  );
}
