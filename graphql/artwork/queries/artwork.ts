import { gql } from "@apollo/client";

export const artworkQuery = gql`
  query findArtwork($findArtworkHandle: String!) {
    findArtwork(handle: $findArtworkHandle) {
      Artworks {
        kind
        handle
        title
        image
        description
        listed
        price
        saleType
        reservePrice
        Auctions {
          currentHigh
          liveAt
          artworkId
          bids {
            id
          }
        }
        latestAuction {
          currentHigh
          bids {
            id
          }
          artworkId
          liveAt
        }
        auctionWithNoReservePriceAndNoBids
        creator {
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
          }
        }
      }
      ClientErrorArtworkNotFound {
        message
      }
      ClientErrorArgumentsConflict {
        path
        message
      }
      ClientErrorUserUnauthorized {
        message
      }
      ClientErrorUnknown {
        message
      }
    }
  }
`;
