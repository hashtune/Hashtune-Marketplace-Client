import { GetServerSideProps } from "next";
import client from "../apollo-client";
import { gql } from "@apollo/client";

export const queryListArtworks = gql`
  query ListArtworksQuery {
    listArtworks {
      handle
      id
      title
      image
      description
      creator {
        fullName
        id
        handle
      }
      saleType
      listed
      auctionWithNoReservePriceAndNoBids
      reservePrice
      price
      Auctions {
        bids {
          id
        }
      }
      latestAuction {
        currentHigh
      }
    }
  }
`;

export const queryListArtworksListCreators = gql`
  query ListArtworksQuery {
    listArtworks {
      handle
      id
      title
      image
      description

      creator {
        fullName
        id
        handle
      }
      saleType
      listed
      auctionWithNoReservePriceAndNoBids
      reservePrice
      price
      Auctions {
        bids {
          id
        }
      }
      latestAuction {
        currentHigh
      }
    }
    listCreators {
      fullName
      id
      image
    }
  }
`;
export const queryListAuctions = gql`
  query ExampleQuery(
    $listArtworksAuction: Boolean
    $listArtworksListed: Boolean
  ) {
    listArtworks(auction: $listArtworksAuction, listed: $listArtworksListed) {
      id
      handle
      title
      image
      description
      listed
      price
      reservePrice
      saleType
      Auctions {
        id
        bids {
          id
        }
      }
      latestAuction {
        currentHigh
      }
      auctionWithNoReservePriceAndNoBids
      creator {
        fullName
        id
      }
    }
  }
`;

export function queryArtworkById(id: string) {
  return client.query({
    query: gql`
      query FindArtworkByIdQuery(${id}: String!){
        findArtwork(id: ${id}) {
          handle
          id
          title
          image
          description
          creator {
            id
            handle
            fullName
            image
          }
          listed
          price
          reservePrice
          saleType
          auctionWithNoReservePriceAndNoBids
          Auctions {
            bids {
              id
            }
          }
          latestAuction {
            currentHigh
          }
        }
      }
    `,
  });
}
