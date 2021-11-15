import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import fetchData from '../../../lib/artworks'
import { ListCreatorFieldsProp } from "../../lib/interfaces/CreatorInterfaces";
import ListCreator from "./ListCreator";
import SortDropDown from "../ArtworkContainer/SortDropdown";

const CreatorContainer = (props: ListCreatorFieldsProp) => {
  let creatorImage = "/images/creator.png"; //Hardcoded for now
  return (
    <div>
      <h3>All Artists</h3>
      <SortDropDown />
      <ul>
        {props.creators.map((creator) => (
          <li key={creator.id}>
            <ListCreator user={creator} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CreatorContainer;
