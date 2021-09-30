import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import client from '../apollo-client'
import { gql } from "@apollo/client";
import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import { useRouter } from 'next/dist/client/router'
import ArtworkContainer from '../components/Home/ListContainer/ArtworkContainer'
import CreatorContainer from '../components/Home/ListContainer/CreatorContainer'
import { ListCreatorFields, ListCreatorFieldsProp } from '../lib/interfaces/CreatorInterfaces'
import { ArtworkFields, ListArtworksFieldsProp } from '../lib/interfaces/ArtworkInterfaces'
import { queryListArtworksListCreators } from '../lib/apiQueries/ArtworkQueries'

export const getStaticProps:  GetStaticProps = async() => {
  const {data} = await client.query({
    query: queryListArtworksListCreators,
  });
    return {
      props: {
        allArtworks: data.listArtworks.slice(0, 10),
        allCreators: data.listCreators.slice(0,20),
        fallback: true
      },
   };
}

export default function Home ({allArtworks, allCreators}: {
  allArtworks: ArtworkFields[],
  allCreators: ListCreatorFields[],
}) {
  const { query } = useRouter();
  const isArtistsTabSelected = !!query.artistsTab;
  const isAllHashtunesSelected = !!query.allHashtunes;
  if (!isArtistsTabSelected){
    return (
      <Layout home>
        <Hero artwork = {allArtworks[0]}/>
        <ArtworkContainer artworks={allArtworks}/>
      </Layout>
    )
  } else {
    return (
      <Layout home>
        <CreatorContainer creators={allCreators}/>
      </Layout>
    )
  }
}



