import { gql } from "@apollo/client";
export const listArtworkQuery = gql`
query queryListArtworks($auction: Boolean, $listed: Boolean) {
    listArtworks(auction: $auction, listed: $listed) {
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
      ExternalChainError {
        message
      }
      ExternalChainErrorStillPending {
        message
      }
    }
}
`;