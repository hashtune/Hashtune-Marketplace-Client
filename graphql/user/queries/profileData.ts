import { gql } from "@apollo/client";

export const queryProfileData = gql`
  query ProfileQuery($handle: String!) {
    findUser(handle: $handle) {
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
        }
        created {
          kind
          handle
          title
          id
          image
          description
          listed
          price
          reservePrice
          saleType
          Auctions {
            id
            currentHigh
            liveAt
            artworkId
          }
          creator {
            fullName
            handle
          }
          Auctions {
            bids {
              id
            }
          }
          auctionWithNoReservePriceAndNoBids
          latestAuction {
            bids {
              id
            }
            currentHigh
          }
        }
        owned {
          kind
          handle
          title
          id
          image
          description
          listed
          price
          reservePrice
          saleType
          Auctions {
            id
            currentHigh
            liveAt
            artworkId
          }
          creator {
            fullName
            handle
          }
          Auctions {
            bids {
              id
            }
          }
          auctionWithNoReservePriceAndNoBids
          latestAuction {
            bids {
              id
            }
            currentHigh
          }
        }
      }
    }
  }
`;
