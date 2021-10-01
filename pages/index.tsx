import Layout from "../components/Layout/layout";
import { GetStaticProps } from "next";
import client from "../apollo-client";
import React from "react";
import Hero from "../components/Home/Hero/Hero";
import { useRouter } from "next/dist/client/router";
import ArtworkContainer from "../components/Home/ListContainer/ArtworkContainer";
import CreatorContainer from "../components/Home/ListContainer/CreatorContainer";
import { ListCreatorFields } from "../lib/interfaces/CreatorInterfaces";
import { ArtworkFields } from "../lib/interfaces/ArtworkInterfaces";
import { queryListArtworksListCreators } from "../lib/apiQueries/ArtworkQueries";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: queryListArtworksListCreators,
  });
  return {
    props: {
      allArtworks: data.listArtworks.slice(0, 10),
      allCreators: data.listCreators.slice(0, 20),
      fallback: true,
    },
  };
};

export default function Home({
  allArtworks,
  allCreators,
}: {
  allArtworks: ArtworkFields[];
  allCreators: ListCreatorFields[];
}) {
  return (
    <div className="app">
    <Navbar/>
    <main>
      <Hero artwork={allArtworks[0]} />
      <ArtworkContainer artworks={allArtworks} />
    </main>
    </div>
  );
}
