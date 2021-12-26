import { gql } from "@apollo/client";

export const artworkQuery = gql`
  query findArtwork($findArtworkHandle: String!) {
    findArtwork(handle: $findArtworkHandle) {
      Artworks {
        id
        kind
        handle
        title
        tokenId
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
        owner {
          id
        }
        events {
          eventData {
            eventType
            price
            txHash
          }
          createdAt
          userEventId {
            handle
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
