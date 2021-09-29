import { gql} from "@apollo/client";
import { GetStaticPaths, GetStaticProps} from "next";
import client from "../../../../apollo-client";
import React from "react";
import { queryArtworkById } from "../../../../lib/apiQueries/ArtworkQueries";
import { ArtworkFields, ArtworkFieldsProp } from "../../../../lib/interfaces/ArtworkInterfaces";
import Layout from "../../../../components/Layout/layout"

const getStaticPaths: GetStaticPaths = async() => {
  const artworks = await client.query({
    query: gql`
      query ListArtworkIds {
        listArtworks {
          id
        }
      }
    `,
  });
  const paths = artworks.data.map((artwork: { id: string; }) => ({
    params: { id: artwork.id },
  }))
  return { paths, fallback: false }
}

async function getStaticProps(context: { params: { id: string; }; }) {
  const artwork = await queryArtworkById(context.params.id)
  return {
    props: {
      artwork
    }
  }
}


export default function Artwork({artwork}: {artwork: ArtworkFields})
{
  return (
    <Layout>
      <h3>{artwork.title}</h3>
    </Layout>
  )
}


// const getAllArtworksData = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query ListArtworkIds {
//         listArtworks {
//           id
//         }
//       }
//     `,
//   });
//   return data.listArtworks.slice(0,30);
// };

// interface ArtworkId{
//   artwork: {
//     id: string,
//   }
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const allArtworksData = await getAllArtworksData();
//   return {
//     props: {
//       allArtworksData: allArtworksData,
//       fallback: true
//     },
//   };
// }
// export const getStaticPaths: GetStaticPaths = async () => {
//   const allArtworksData = await getAllArtworksData();
//   const paths = getAllArtworkIds(allArtworksData)
//   return {
//     paths,
//     fallback: true
//   }
// }
// export function getAllArtworkIds({ allArtworksData }: {
//   allArtworksData: {
//     id: string
//   }[]
// }) {
//   const allArtworkIds = allArtworksData?.map(artwork => artwork.id);
//   return allArtworkIds?.map(artworkId => {
//     return {
//       params: {
//         id: artworkId
//       }
//     }
//   })
// }

// export async function getArtworkById(id: string) {
//     const data  = await client.query({
//       query: queryArtworkById(id),
//     });
//   return (
//     props : 
//   )
// }
// USE LATER POTENTIALLY
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Get data from your database
//   res.status(200).json(getAllArtworkIds)
// }
