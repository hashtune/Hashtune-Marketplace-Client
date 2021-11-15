import { GetStaticProps } from "next";
import client from "../lib/apollo-client";
import React from "react";
import ArtworkContainer from "../components/ArtworkContainer/ArtworkContainer";
import { listArtworkQuery } from "../graphql/artwork/queries/listArtworks";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import { Artwork } from "../graphql/generated/apolloComponents";
import { PAGES } from "../utils/constants/enum";
import { useRouter } from "next/router";
import Hero from "../components/Hero/Hero";

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
        <ArtworkContainer
          artworks={allArtworks}
          tabs={["All Hashtunes", "Auctions", "Buy Now"]}
          page={PAGES.HOME}
        />
      </main>
    </div>
  );
}
