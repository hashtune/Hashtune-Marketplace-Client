import { gql } from "@apollo/client";
import { resultKeyNameFromField } from "@apollo/client/utilities";
import { GetStaticPaths, GetStaticProps, NextApiRequest, NextApiResponse } from "next";
import Head from "next/head";
import client from "../../../../apollo-client";
import Layout from "../../../../components/Layout/layout";

const getAllArtworksData = async () => {
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        listArtworks {
          id
        }
      }
    `,
  });
  return data.listArtworks.slice(0,8);
};
export const getStaticProps: GetStaticProps = async () => {
  const allArtworksData = await getAllArtworksData();
  return {
    props: {
      allArtworksData: allArtworksData,
      fallback: true
    },
  };
}
export const getStaticPaths: GetStaticPaths = async () => {
  const allArtworksData = await getAllArtworksData();
  const paths = getAllArtworkIds(allArtworksData)
  return {
    paths,
    fallback: true
  }
}
export function getAllArtworkIds({ allArtworksData }: {
  allArtworksData: {
    id: string
  }[]
}) {
  const allArtworkIds = allArtworksData?.map(artwork => artwork.id)
  console.log(allArtworkIds)
  return allArtworkIds?.map(artworkId => {
    return {
      params: {
        id: artworkId
      }
    }
  })
}

export async function getArtworkById(id: string) {
    const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        listArtworks(id : ${id}) {
          id
        }
      }
    `,
  });
}
// USE LATER POTENTIALLY
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Get data from your database
//   res.status(200).json(getAllArtworkIds)
// }
