import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import client from '../apollo-client'
import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import {Artwork} from "../components/Home/ListArtwork/ListArtwork"
import { useRouter } from 'next/dist/client/router'
import ArtworkContainer from '../components/Home/ListContainer/ArtworkContainer'
import CreatorContainer from '../components/Home/ListContainer/CreatorContainer'
import { Creator } from '../components/Home/ListCreator/ListCreator'


export const getStaticProps:  GetStaticProps = async() => {
  const {data} = await client.query({
    query: gql`
    query ExampleQuery {
      listArtworks{
        id
        title
        saleType
        image
        description
        listed
        reservePrice
        price
        Auctions {
          bids {
            id
          }
          currentHigh
        }
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
        allArtworks: data.listArtworks.slice(0, 10),
        allCreators: data.listCreators.slice(0,20),
        fallback: true
      },
   };
}

export default function Home ({allArtworks, allCreators}: {
  allArtworks: Artwork[],
  allCreators: Creator[],
}) {
  const { query } = useRouter();
  const isArtistsTabSelected = !!query.artistsTab;
  const isAllHashtunesSelected = !!query.allHashtunes;
  // const isAuctionsSelected = !!query.auctions; STILL NEEDS TOBE IMPLEMENTED
  // const isBuyNowSeleected = !!query.buyNow;
  if (!isArtistsTabSelected && isAllHashtunesSelected){
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



