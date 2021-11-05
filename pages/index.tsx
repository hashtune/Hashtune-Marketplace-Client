import { GetStaticProps } from "next";
import client from "../lib/apollo-client";
import React from "react";
import Hero from "../components/Home/Hero/Hero";
import ArtworkContainer from "../components/Home/ListContainer/ArtworkContainer";
import { listArtworkQuery } from "../graphql/artwork/queries/listArtworks";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import { Artwork } from "../graphql/generated/apolloComponents";

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

export default function Home({ allArtworks }: { allArtworks: Artwork[] }) {
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
