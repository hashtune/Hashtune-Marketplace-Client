import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import client from '../apollo-client'
import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import MusicList from '../components/Home/ListContainer/MusicList'
import CreatorList from '../components/Home/ListContainer/CreatorList'
import {Artwork} from "../components/Home/ListArtwork/ListArtwork"


export const getStaticProps:  GetStaticProps = async() => {
  const {data} = await client.query({
      query: gql`
        query ExampleQuery {
          listArtworks {
            id
            handle
            kind
            artworkType
            description
            owner {
              id
              image
              handle
            }
          }
          listTrendyCreators {
            image
            handle
            id
            name 
            bio
          }
        }
      `,
    });
    return {
      props: {
        allArtworks: data.listArtworks.slice(0, 8),
        allTrendyCreators: data.listTrendyCreators.slice(0,16),
        fallback: true
      },
   };
}


export default function Home ({allArtworks, allTrendyCreators}: {
  allArtworks: Artwork[],
  allTrendyCreators: {
    id: string,
    name: string
    handle: string,
    image: string,
    bio:string
  }[]
}) {

  
  return (
    <Layout home>
    {/* TODO: get price, cover img, from props. Calculate hours, minutes, seconds,
    add string to creators.*/}
    <Hero artwork = {allArtworks[0]}/>
    <MusicList title={'Trending Auctions'} viewAll={'Auctions'} artworks={allArtworks}/>
    <MusicList title={'Trending Music'} viewAll={'Music'} artworks={allArtworks}/>
    <CreatorList title={'Trending Creators'} creators={allTrendyCreators}/>
    </Layout>
  )
}



