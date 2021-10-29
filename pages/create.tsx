import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { MetamaskContext } from "../hooks/connectWallet";
import React, { useEffect } from "react";
import client from "../lib/apollo-client";
import gql from "graphql-tag";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "./Create.module.scss";
import { checkHandleFree } from "../lib/apiQueries/ArtworkQueries";

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
  const [handle, setHandle] = React.useState<string>("");
  const [handleFree, setHandleFree] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const createNFTMutation = gql`
    mutation Mutation($addArtworkInputType: CreateArtworkInput) {
      addArtwork(InputType: $addArtworkInputType) {
        Artworks {
          title
          description
          saleType
          txHash
          pending
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
        ExternalChainErrorStillPending {
          message
        }
      }
    }
  `;
  const createNFTSubmit = async () => {
    // Change this query to validate the user, handle, title, image, description, link, media.

    const isHandleFree = await client.query({
      query: checkHandleFree,
      variables: {
        handleHandle: handle,
      },
    });

    if (!isHandleFree || isHandleFree.data.handle === false) {
      console.log(
        "handle already exists, wont be able to create this NFT in our db"
      );
      setHandleFree(false);
      return false;
    } else {
      setHandleFree(true);
    }
    const txHash = await createNFT();
    if (!txHash) return;
    const input: CreateInputType = {
      txHash: txHash,
      handle,
      title,
      image,
      description,
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

  const handleChange = (val: string) => {
    setHandle(val);
  };
  const titleChange = (val: string) => {
    setTitle(val);
  };
  const imageChange = (val: string) => {
    setImage(val);
  };
  const descriptionChange = (val: string) => {
    setDescription(val);
  };

  return (
    <div>
      <Navbar />
      <main>
        <div>
          <input
            datatype="text"
            placeholder="my-first-nft"
            onChange={(val) => handleChange(val.target.value)}
          />
          <input
            datatype="text"
            placeholder="title"
            onChange={(val) => titleChange(val.target.value)}
            defaultValue="default title"
          />
          <input
            datatype="text"
            placeholder="image"
            onChange={(val) => imageChange(val.target.value)}
            defaultValue="default image link"
          />
          <input
            datatype="text"
            placeholder="description"
            onChange={(val) => descriptionChange(val.target.value)}
            defaultValue="default description"
          />
          <button className={styles.button} onClick={() => createNFTSubmit()}>
            CREATE NFT
          </button>
        </div>
      </main>
    </div>
  );
}
