import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { MetamaskContext } from "../hooks/connectWallet";
import React, { useEffect } from "react";
import client from "../lib/apollo-client";
import gql from "graphql-tag";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "./Create.module.scss";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // TODO: return the information about the user from metamask
  return {
    props: {},
  };
}
export type CreateInputType = {
  txHash: string;
  handle: string;
  title: string;
  image: string;
  link: string;
  media: any;
  saleType: string;
  reservePrice: number;
  description: string;
  currentOwner: string;
  creator: string;
};
export default function CreatePage() {
  const { createNFT } = React.useContext(MetamaskContext);
  const createNFTMutation = gql`
    mutation Mutation($addArtworkInputType: CreateArtworkInput) {
      addArtwork(InputType: $addArtworkInputType) {
        Artworks {
          title
          description
          saleType
          creator {
            fullName
          }
          owner {
            fullName
          }
        }
        ClientErrorArtworkNotFound {
          message
        }
        ClientErrorArgumentsConflict {
          message
          path
        }
        ClientErrorUserUnauthorized {
          message
        }
        ClientErrorUnknown {
          message
        }
        ExternalChainError {
          message
        }
      }
    }
  `;
  const createNFTSubmit = async () => {
    const txHash = await createNFT();
    console.log({ txHash });
    if (!txHash) throw new Error("");
    // Hardcoding this for now but should come from form
    const input: CreateInputType = {
      txHash: txHash,
      handle: "NFTREAL2424", // Needs to be unique everytime
      title: "NFTREAL111",
      image: "NFTREAL111",
      description: "NFTREAL111",
      link: "a.rt/",
      media: { data: [{ media: "lala", title: "amazingsongTitle" }] },
      currentOwner: "ckv0qlov100074fw0kn6hev4g",
      creator: "ckv0qlov100074fw0kn6hev4g",
      saleType: "auction",
      reservePrice: 50,
    };
    const res = await client.mutate({
      mutation: createNFTMutation,
      variables: {
        addArtworkInputType: {
          ...input,
        },
      },
    });
    console.log({ res }); // If there was an error then artworks will be empty
  };

  return (
    <div>
      <Navbar />
      <main>
        <div>
          <button className={styles.button} onClick={() => createNFTSubmit()}>
            CREATE NFT
          </button>
        </div>
      </main>
    </div>
  );
}
