import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import client from '../apollo-client'
import { gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from 'next'


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
            }
          }
        }
      `,
    });
    return {
      props: {
        allArtworksData: data.listArtworks.slice(0, 8),
        fallback: true
      },
   };
}


export default function Home ({allArtworksData}: {
  allArtworksData: {
    handle: string
    id: string
    kind: string
  }[]
}) {
  
  return (
    <Layout home>
    <ul> 
      {allArtworksData.map(artwork => (
          <li key={artwork.id}>
            {artwork.handle}
          </li>
        ))}
    </ul>
    </Layout>
  )
}



