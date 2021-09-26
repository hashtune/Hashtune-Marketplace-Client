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
          listArtworks{
            id
            title
            saleType
            reservePrice
            price
            creator {
              handle
              image
              fullName
            }
            latestAuction {
              bids {
                id
              }
            }
          }
          listCreators {
            fullName
            image
            handle
            id
            bio
          }
        }
      `,
    });
    return {
      props: {
        allArtworks: data.listArtworks.slice(0, 8),
        allCreators: data.listCreators.slice(0,16),
        fallback: true
      },
   };
}


export default function Home ({allArtworks, allCreators}: {
  allArtworks: Artwork[],
  allCreators: {
    id: string,
    name: string
    handle: string,
    image: string,
    bio:string
  }[]
}) {
  console.log("ARTWORKSs:" + allArtworks)
  
  return (
    <Layout home>
    {/* TODO: get price, cover img, from props. Calculate hours, minutes, seconds,
    add string to creators.*/}
    <Hero artwork = {allArtworks[0]}/>
    <MusicList title={'Trending Auctions'} viewAll={'Auctions'} artworks={allArtworks}/>
    <MusicList title={'Trending Music'} viewAll={'Music'} artworks={allArtworks}/>
    <CreatorList creators={allCreators}/>
    </Layout>
  )
}



