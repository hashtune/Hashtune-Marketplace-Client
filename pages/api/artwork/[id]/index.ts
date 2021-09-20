import { gql } from "@apollo/client";
import { resultKeyNameFromField } from "@apollo/client/utilities";
import { GetStaticPaths, GetStaticProps, NextApiRequest, NextApiResponse } from "next";
import client from "../../../../apollo-client";

export const getStaticProps:  GetStaticProps = async() => {
  const {data} = await client.query({
      query: gql`
        query ExampleQuery {
          listArtworks {
            id
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
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArtworkIds()
  return {
    paths,
    fallback: true
  }
}



export default function getAllArtworkIds({allArtworksData} : {
    allArtworksData: {
        id: string
    }[]
} ){
    const allArtworkIds = allArtworksData.map(artwork => artwork.id )
    return allArtworkIds.map(artworkId => {
        return {
            params: {
                id: artworkId
            }
        }
    })
}
