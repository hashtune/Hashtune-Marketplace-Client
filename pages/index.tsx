import React from "react";
import Hero from "../components/Home/Hero/Hero";
import ArtworkContainer from "../components/Home/ListContainer/ArtworkContainer";
import { ArtworkFields } from "../lib/interfaces/ArtworkInterfaces";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import { Session } from "../hooks/session";

export { getServerSideProps } from "../hooks/session";

export default function Home({
  allArtworks,
  session,
}: {
  allArtworks: ArtworkFields[];
  session: Session;
}) {
  return (
    <div className="app">
      <Navbar session={session} />
      <main>
        <Hero artwork={allArtworks[0]} />
        <ArtworkContainer type={"All Hashtunes"} artworks={allArtworks} />
      </main>
    </div>
  );
}
