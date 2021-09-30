import { gql } from "@apollo/client";
import { GetServerSidePropsContext } from "next";
import client from "../../../apollo-client";
import React from "react";
import Layout from "../../../components/Layout/layout";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  console.log(ctx);
  console.log("GET SERVER SIDE PROPS CALLED");
  const { user, artwork } = ctx.query;
  console.log({ artwork });
  const singleArtwork = await client.query({
    query: gql`
      query Query($findArtworkId: String!) {
        findArtwork(id: $findArtworkId) {
          title
          handle
          image
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
    `,
    variables: { findArtworkId: artwork },
  });
  console.log({ singleArtwork });
  if (singleArtwork.data.findArtwork) {
    return {
      props: {
        artwork: singleArtwork.data.findArtwork,
      },
    };
  }

  return {
    props: {
      artwork: null,
    },
  };
}

export default function Artwork(singleArtwork: any) {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    console.log("refreshing");
    router.replace(router.asPath);
    setIsRefreshing(true);
  };

  React.useEffect(() => {
    setIsRefreshing(false);
  }, [singleArtwork]);
  return (
    <Layout>
      {isRefreshing ? (
        <h1>LODING</h1>
      ) : (
        <>
          <button onClick={refreshData}>GET NEW DATA</button>
          <h3>{singleArtwork.artwork.handle}</h3>
          <h3>{singleArtwork.artwork.title}</h3>
          <h3>{singleArtwork.artwork.image}</h3>
          <h3>{singleArtwork.artwork.creator.id}</h3>
          <h3>{singleArtwork.artwork.creator.fullName}</h3>
          <Link href={`/${singleArtwork.artwork.creator.handle}`}>
            {singleArtwork.artwork.creator.handle}
          </Link>
          <h3>{singleArtwork.artwork.saleType}</h3>
          <h3>{singleArtwork.artwork.lsited}</h3>
          <h3>{singleArtwork.artwork.price}</h3>
          <h3>{singleArtwork.artwork.reservePrice}</h3>
        </>
      )}
    </Layout>
  );
}
