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
        allArtworksData: data.listArtworks.slice(0, 8),
        allTrendyCreatorsData: data.listTrendyCreators.slice(0,16),
        fallback: true
      },
   };
}


export default function Home ({allArtworksData, allTrendyCreatorsData}: {
  allArtworksData: {
    id: string,
    name: string
    handle: string,
    image: string,
    artworkType: string,
    owner: {
       handle: string,
       image: string 
    }
  }[],
  allTrendyCreatorsData: {
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
    <Hero title={allArtworksData[0].handle} background={'/images/backgroundHome.jpg'} coverImage={'/images/artwork.png'} price={3.04} creatorImage={allArtworksData[0].owner.image} creatorHandle={allArtworksData[0].owner.handle} hours={0} minutes={0} seconds={0}/>
    <MusicList title={'Trending Auctions'} viewAll={'Auctions'} artworks={allArtworksData}/>
    <MusicList title={'Trending Music'} viewAll={'Music'} artworks={allArtworksData}/>
    <CreatorList title={'Trending Creators'} creators={allTrendyCreatorsData}/>
    </Layout>
  )
}



