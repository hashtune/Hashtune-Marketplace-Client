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
  query queryListArtworksListCreators {
    listArtworks {
      ClientErrorArtworkNotFound {
        message
      }
      ClientErrorArgumentsConflict {
        message
        path
      }
      ClientErrorUnknown {
        message
      }
      ClientErrorUserUnauthorized {
        message
      }
      Artworks {
        id
        handle
        title
        image
        description
        listed
        saleType
        price
        reservePrice
        auctionWithNoReservePriceAndNoBids
        creator {
          fullName
          handle
          email
          bio
          image
          isApprovedCreator
        }
        Auctions {
          bids {
            id
          }
        }
        latestAuction {
          bids {
            id
          }
          artworkId
          liveAt
          currentHigh
        }
      }
    }
    listCreators {
      ClientErrorUserNotFound {
        message
      }
      ClientErrorUnknown {
        message
      }
      Users {
        id
        fullName
        handle
        email
        bio
        image
        isApprovedCreator
        wallet {
          provider
          publicKey
          createdAt
          updatedAt
        }
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
