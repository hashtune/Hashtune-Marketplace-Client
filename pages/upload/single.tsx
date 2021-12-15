import { Navbar } from "../../components/Layout/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { Formik, Field } from "formik";
import { useRegisterUserMutation } from "../../graphql/generated/apolloComponents";
import router, { useRouter } from "next/router";
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
    router.replace("/" + session.user.handle + "/", handle); // Not tested
  };
  const [oldImage, setOldImage] = React.useState<string>("");
  const [oldSong, setOldSong] = React.useState<string>("");
  const [previewTitle, setPreviewTitle] = React.useState<string>(
    "My First NFT"
  );
  const [previewHandle, setPreviewHandle] = React.useState<string>(
    "My First NFT"
  );
  const [previewDescription, setPreviewDescription] = React.useState<string>(
    "My First NFT"
  );
  const [cutOff, setCutOff] = React.useState<number>(50);
  const [titleOverflowing, setTitleOverflowing]= React.useState<boolean>(false);
  
  const [handleOverflowing, setHandleOverflowing]= React.useState<boolean>(false);
  
  const [descriptionOverflowing, setDescriptionOverflowing]= React.useState<boolean>(false);
  const previewText = (cutOff: number, val: string) => {
    if (val.length > cutOff) {
      return val.slice(0, cutOff - 4) + "...";
    } else {
      return val;
    }
  };

  const playButton = useRef<HTMLDivElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const handleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  
  const [titleCutoffLength, setTitleCutoffLength] = React.useState<number>(50);
  const [handleCutoffLength, setHandleCutoffLength] = React.useState<number>(50);

  useEffect(() => {
    console.log("height " + contentRef.current ? contentRef.current?.offsetHeight: 0);
    let playButtonSmall = playButton.current && playButton.current.offsetWidth<=70;
    let contentOversized =  contentRef.current && contentRef.current.offsetHeight>240;
    if (playButtonSmall && document.activeElement == titleInputRef.current){
      setTitleOverflowing(true)
    } else if (contentOversized){
      setHandleOverflowing(true);
    }
  }, [playButton.current, playButton.current?.offsetWidth,contentRef.current, contentRef.current?.offsetHeight, titleInputRef.current?.textContent, handleInputRef.current?.textContent]);

  const [firstHandleOverflow, setFirstHandleOverflow] = React.useState<boolean>(true);
  const [firstTitleOverflow, setFirstTitleOverflow] = React.useState<boolean>(true);

  const handleChange = (val: string) => {
    if (handleOverflowing){
      if (firstHandleOverflow){
      setFirstHandleOverflow(false);
      setHandleCutoffLength(val.length-6);
      }
      setPreviewHandle(previewText(handleCutoffLength, val));
    } else {
      setFirstHandleOverflow(true);
      setPreviewHandle(val);
    }
    setHandle(val);
  };
  const titleChange = (val: string) => {
    if (titleOverflowing){
      if (firstTitleOverflow){
      setFirstTitleOverflow(false);
      setTitleCutoffLength(val.length);
      }
      setPreviewTitle(previewText(titleCutoffLength, val));
    } else {
      setFirstTitleOverflow(true);
      setPreviewTitle(val);
    }
    setTitle(val);
  };
  const imageChange = (val: string) => {
    setImage(val);
  };
  const descriptionChange = (val: string) => {
    if (val.length>60){
      setPreviewDescription(val.slice(0,60)+ "...");
    } else {
      setPreviewDescription(val);
    }
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
                accept="audio/*"
                onChange={(val) => {
                  if (val.target.files) {
                    try {
                      songChange(URL.createObjectURL(val.target.files[0]));
                    } catch (err) {}
                  }
                }}
              />
            </div>
            <hr className={styles["divider"] + " mt-small mb-small"} />
            <div className="group_inputs__group">
              <div className="input__group">
                <label htmlFor="">NFT Handle (Link)</label>
                <input
                  className="text_input"
                  datatype="text"
                  ref = {handleInputRef}
                  placeholder="E.g. My-First-NFT"
                  onChange={(val) => handleChange(val.target.value)}
                />
              </div>
              <div className="input__group">
                <label htmlFor="">NFT title </label>
                <input
                  className="text_input"
                  datatype="text"
                  ref= {titleInputRef}
                  maxLength={40}
                  placeholder="E.g. My First NFT"
                  onChange={(val) => titleChange(val.target.value)}
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
                  accept="image/*"
                  onChange={(val) => {
                    if (val.target.files && val.target.files !== undefined) {
                      try {
                        imageChange(URL.createObjectURL(val.target.files[0]));
                      } catch (err) {}
                    }
                  }}
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
                maxLength={150}
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

            <div ref = {contentRef} className={styles["single__preview-artwork--content"]}>
              <div className={styles["single__preview-artwork--top"]}>
                <div
                  ref={playButton}
                  className={styles["single__preview-artwork--player"]}
                >
                  <PlayerContainer
                    url={song}
                    artist="{artwork.creator.handle}"
                    title="{artwork.title}"
                  />
                </div>
                <div className={styles["single__preview-artwork--heading"]}>
                  <h1>{previewTitle}</h1>
                  <small>
                    <a href="#">hashtune.co/user-handle/{previewHandle}</a>
                  </small>
                </div>
              </div>
              <hr className="divider" />
              <p>{previewDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
