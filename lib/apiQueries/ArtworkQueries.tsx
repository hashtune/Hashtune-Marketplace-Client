import { GetServerSideProps } from "next";
import client from "../../apollo-client";
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
const onlyAuctions = true;
export function queryListAuctions(onlyAuctions: boolean) {
  return gql`
    query ListAuctionsQuery(${onlyAuctions}: Boolean) {
      listArtworks(auction: ${onlyAuctions}){
        id
        title
        image
        description

        creator {
          fullName
          id
          handle
        }
        auctionWithNoReservePriceAndNoBids
        latestAuction {
          bids {
            id
          }
          liveAt
          currentHigh
        }
      }
    }
    `;
}
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

const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        listArtworks {
          id
          title
          saleType
          image
          listed
          description
          reservePrice
          price
          Auctions {
            bids {
              id
            }
            currentHigh
          }
          creator {
            handle
            image
            fullName
          }
          latestAuction {
            bids {
              id
            }
          }
        }
        listCreators {
          fullName
        }
      }
    `,
  });
  return {
    props: {
      allArtworks: data.listArtworks,
      allCreators: data.listCreators,
      fallback: true,
    },
  };
};
