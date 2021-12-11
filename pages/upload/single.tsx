import { Navbar } from "../../components/Layout/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import { useRegisterUserMutation } from "../../graphql/generated/apolloComponents";
import router from "next/router";
import Image from "next/image";
import styles from "../../styles/pages/Single.module.scss";
import { InputField } from "../../components/Fields/InputField";
import DropFileInput from "../../components/Forms/DropFileInput/DropFileInput";

import { MetamaskContext } from "../../hooks/connectWallet";
import client from "../../lib/apollo-client";
import gql from "graphql-tag";
import { checkHandleFree } from "../../lib/apiQueries/ArtworkQueries";
import { SaleType } from "../../hooks/connectWallet";
import { Session } from "../../hooks/session";
import { link } from "fs";
import PlayerContainer from "../../components/Audio/PlayerContainer";

export { getServerSideProps } from "../../hooks/session";

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
export default function CreatePage({ session }: { session: Session }) {
  const { createNFT } = React.useContext(MetamaskContext);
  const [song, setSong] = React.useState<string>("/dist/audio/4.mp3");
  const [handle, setHandle] = React.useState<string>("NFT-single-handle");
  const [handleFree, setHandleFree] = React.useState<boolean>(true);
  const [title, setTitle] = React.useState<string>("NFT Single title");
  const [image, setImage] = React.useState<string>(
    "/dist/images/mock/artworks/1.png"
  );
  const [description, setDescription] = React.useState<string>(
    "NFT Single Description"
  );
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

  const songChange = (val: string) => {
    setSong(val);
  };

  const creatorsListChange = (address: string[]) => {};
  const creatorsRoyaltiesChange = (cuts: number[]) => {};

  // export default function Single() {
  const onFileChange = (files: any) => {
    // const selectedFile = files.target.input.files[0];
    // console.log("Selected File", selectedFile);
    // var data = new FormData();
    // data.append("file", selectedFile);
    // console.log("Form Data", data);
  };

  const renderImage = () => {
    if (image === "" || !image) {
      return (
        <Image
          alt="cover image"
          src="/dist/images/mock/artworks/1.png"
          width={600}
          height={600}
        />
      );
    } else {
      return (
        <Image
          alt="cover image"
          src={image}
          width={600}
          height={600}
          defaultValue="/dist/images/mock/artworks/1.png"
        />
      );
    }
  };

  console.log(renderImage());

  return (
    <div className={"app " + styles["single__layout"]}>
      <Navbar session={session} />
      <div className={styles["single__container"]}>
        <div
          className={styles["single__section"] + " " + styles["single__form"]}
        >
          <h1>Upload your Music 🎸</h1>

          <div className={styles["register__form"] + " mt-small"}>
            {/* <DropFileInput onFileChange={(files) => onFileChange(files)} /> */}
            <div className="input__group">
              <label htmlFor="">NFT Single Song </label>
              <input
                className="text_input"
                datatype="file"
                type="file"
                placeholder="song"
                onChange={(val) => songChange(val.target.value)}
              />
            </div>
            <hr className={styles["divider"] + " mt-small mb-small"} />
            <div className="group_inputs__group">
              <div className="input__group">
                <label htmlFor="">NFT Handle (Link)</label>
                <input
                  className="text_input"
                  datatype="text"
                  placeholder="E.g. My First NFT"
                  onChange={(val) => handleChange(val.target.value)}
                />
              </div>
              <div className="input__group">
                <label htmlFor="">NFT title </label>
                <input
                  className="text_input"
                  datatype="text"
                  placeholder="E.g. My First NFT"
                  onChange={(val) => titleChange(val.target.value)}
                  // defaultValue="default title"
                />
              </div>
            </div>
            <div className="group_inputs__group">
              <div className="input__group">
                <label htmlFor="">Music NFT Cover </label>
                <input
                  className="text_input"
                  datatype="file"
                  type="file"
                  placeholder="image"
                  onChange={(val) => imageChange(val.target.value)}
                  defaultValue={
                    !image ? "/dist/images/mock/users/3.png" : image
                  }
                />
              </div>
            </div>
            <hr className={styles["divider"] + " mt-small mb-small"} />

            <div className="group_inputs__group group_inputs__group--auction">
              <div className="input__group input__group--auction">
                <label> Auction</label>
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={(val) => typeChange(val.target.checked)}
                    id="auction"
                    name="auction"
                  />
                  <span className="slider" />
                </label>
              </div>
              <div className="vertical_divider" />
              {saleType === "fixed" ? (
                <div className="input__group">
                  <label htmlFor="">NFT Price </label>
                  <input
                    type="number"
                    placeholder="sale price"
                    onChange={(val) => salePriceChange(val.target.value)}
                    className="text_input"
                  />
                </div>
              ) : (
                <div className="input__group">
                  <label htmlFor="">Auction reserve price </label>
                  <input
                    type="number"
                    placeholder="auction reserve price"
                    onChange={(val) => reservePriceChange(val.target.value)}
                    className="text_input"
                  />
                </div>
              )}
            </div>
            <hr className={styles["divider"] + " mt-small mb-small"} />

            <div className="input__group">
              <label htmlFor="">NFT Description </label>
              <textarea
                className="text_input"
                datatype="text"
                placeholder="E.g. I Produced this track when ..."
                onChange={(val) => descriptionChange(val.target.value)}
                // defaultValue="default description"
              />
            </div>

            {/* <hr className={styles["divider"]} /> */}
            <div className="input__group input__group-checkbox mt-small">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox_input"
                value="check"
                id="accept"
              />
              <label htmlFor="accept" className="checkbox_mark">
                {" "}
                Check here to indicate that you agree to Hashtune’s{" "}
                <a href="">Terms of use</a>
              </label>
            </div>
            <button
              className={
                styles["primary_button"] + " primary_button mt-small mb-big"
              }
              onClick={() => createNFTSubmit()}
            >
              Create your NFT
            </button>
          </div>
        </div>
        <div
          className={
            styles["single__section"] + " " + styles["single__preview"]
          }
        >
          <div className={styles["single__preview-artwork"]}>
            <div className={styles["single__preview-artwork--image"]}>
              {renderImage()}
            </div>

            <div className={styles["single__preview-artwork--content"]}>
              <div className={styles["single__preview-artwork--player"]}>
                <PlayerContainer
                  url={song}
                  artist="{artwork.creator.handle}"
                  title="{artwork.title}"
                />
                <div className={styles["single__preview-artwork--heading"]}>
                  <h1>{title}</h1>
                  <small>
                    <a href="#">hashtune.co/user-handle/{handle}</a>
                  </small>
                </div>
              </div>
              <hr className="divider" />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
