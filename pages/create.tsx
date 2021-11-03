import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { MetamaskContext } from "../hooks/connectWallet";
import React, { useEffect, useState } from "react";
import client from "../lib/apollo-client";
import gql from "graphql-tag";
import { Navbar } from "../components/Layout/Navbar/Navbar";
import styles from "./Create.module.scss";
import { checkHandleFree } from "../lib/apiQueries/ArtworkQueries";
import { SaleType } from "../hooks/connectWallet";
import { useContract } from "../hooks/useContract";
import { SongOrAlbumNFT } from "../utils/types/hashtune-contract-types";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import { CustomContext } from "../hooks/useCustomProvider";
import { useWeb3Wallet } from "../hooks/useWeb3Wallet";

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
  reservePrice?: string;
  salePrice?: string;
  description: string;
  currentOwner: string;
  creator: string;
};
export default function CreatePage() {
  const { createNFT } = React.useContext(MetamaskContext);
  const { signer, connectWallet, disconnectWallet } = React.useContext(CustomContext);
  //const { signer, connectWallet, disconnectWallet } = useWeb3Wallet();
  const contract: SongOrAlbumNFT = useContract().connect(signer);
  const [handle, setHandle] = React.useState<string>("");
  const [handleFree, setHandleFree] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>("default");
  const [image, setImage] = React.useState<string>("default");
  const [description, setDescription] = React.useState<string>("default");
  const [saleType, setSaleType] = React.useState<SaleType>("fixed");
  const [reservePrice, setReservePrice] = React.useState<string>("0");
  const [salePrice, setSalePrice] = React.useState<string>("0");

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

  const createNFTTransaction = async () => {
    console.log(await signer.getAddress(), contract.create());
  }

  const createNFTSubmit = async () => {
    // Change this query to validate the user, that the user is approved to create
    // handle, title, image, description, link, media.

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
    const txHash = await createNFT({
      saleType: saleType,
      price: saleType === "auction" ? reservePrice : salePrice,
      creatorsList: [
        "0x1Ab754099c55731A994AFB6356F1d129CcAD2375",
        "0xB11C1e1a4529293362979c99b05Ca97829da634B",
      ],
      creatorsRoyalties: [90, 10],
    });
    if (!txHash) return;
    const input: CreateInputType = {
      txHash: txHash,
      handle,
      title,
      image,
      description,
      link: "a.rt/",
      media: { data: [{ media: "lala", title: "amazingsongTitle" }] },
      currentOwner: "ckvcffk0s0007fxw09dxfjrgz",
      creator: "ckvcffk0s0007fxw09dxfjrgz",
      saleType,
      // Parse these to big int
      reservePrice: saleType === "auction" ? reservePrice : undefined,
      salePrice: saleType === "fixed" ? salePrice : undefined,
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
  const typeChange = (val: boolean) => {
    setSaleType(val ? "auction" : "fixed");
  };
  const salePriceChange = (val: string) => {
    // TODO make sure this doesn not have characters
    setSalePrice(val);
  };
  const reservePriceChange = (val: string) => {
    // TODO make sure this doesn not have characters
    setReservePrice(val);
  };

  const creatorsListChange = (address: string[]) => {};
  const creatorsRoyaltiesChange = (cuts: number[]) => {};

  return (
    <div>
      <Navbar />
      <main>
        <div className={styles.form}>
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

          <label> Auction</label>
          <input
            type="checkbox"
            onChange={(val) => typeChange(val.target.checked)}
            id="auction"
            name="auction"
          />
          {saleType === "fixed" ? (
            <input
              type="number"
              placeholder="sale price"
              onChange={(val) => salePriceChange(val.target.value)}
            />
          ) : (
            <input
              type="number"
              placeholder="auction reserve price"
              onChange={(val) => reservePriceChange(val.target.value)}
            />
          )}

          <button className={styles.button} onClick={() => createNFTTransaction()}>
            CREATE NFT
          </button>
          <button className={styles.button} onClick={connectWallet}>Connect</button>
          <button className={styles.button} onClick={disconnectWallet}>Disconnect</button>
        </div>
      </main>
    </div>
  );
}
