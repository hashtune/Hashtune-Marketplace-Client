import React, { useEffect, useState } from "react";
import styles from "./Artwork.module.scss";
import ListArtwork from "../ListArtwork/ListArtwork";
import { ListArtworksProps } from "../../../lib/interfaces/ArtworkInterfaces";
import Link from "next/link";
import client from "../../../lib/apollo-client";
import { QueryListArtworksQuery } from "../../../graphql/generated/apolloComponents";
import SortDropDown from "./SortDropdown";
import { listArtworkQuery } from "../../../graphql/artwork/queries/listArtworks";

interface TabProps {
  onClick: () => void;
  style: string;
  text: string;
}
const Tab = (props: TabProps) => {
  return (
    <a className={props.style} onClick={() => props.onClick}>
      {props.text}
    </a>
  );
};
export default Tab;
