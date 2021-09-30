// import { gql } from "@apollo/client";
// import { GetServerSidePropsContext } from "next";
// import client from "../../apollo-client";
// import React from "react";
// import Layout from "../../components/Layout/layout";

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {

//   const { user } = ctx.query;
//   console.log({ user });
//   const singleArtwork = await client.query({
//     query: gql`
//       query Query($findArtworkId: String!) {
//         findArtwork(id: $findArtworkId) {
//           title
//           handle
//           image
//           creator {
//             fullName
//             id
//             handle
//           }
//           saleType
//           listed
//           auctionWithNoReservePriceAndNoBids
//           reservePrice
//           price
//           Auctions {
//             bids {
//               id
//             }
//           }
//           latestAuction {
//             currentHigh
//           }
//         }
//         listCreators {
//           fullName
//           id
//           image
//         }
//       }
//     `,
//     variables: { findArtworkId: artwork },
//   });
//   console.log({ singleArtwork });
//   if (singleArtwork.data.findArtwork) {
//     return {
//       props: {
//         artwork: singleArtwork.data.findArtwork,
//       },
//     };
//   }

//   return {
//     props: {
//       artwork: null,
//     },
//   };
// }

// export default function Artwork(singleArtwork: any) {
//   return (
//     <Layout>
//       <h3>{singleArtwork.artwork.handle}</h3>
//       <h3>{singleArtwork.artwork.title}</h3>
//       <h3>{singleArtwork.artwork.image}</h3>
//       <h3>{singleArtwork.artwork.creator.id}</h3>
//       <h3>{singleArtwork.artwork.creator.fullName}</h3>
//       <h3>{singleArtwork.artwork.creator.handle}</h3>
//       <h3>{singleArtwork.artwork.saleType}</h3>
//       <h3>{singleArtwork.artwork.lsited}</h3>
//       <h3>{singleArtwork.artwork.price}</h3>
//       <h3>{singleArtwork.artwork.reservePrice}</h3>
//     </Layout>
//   );
// }
