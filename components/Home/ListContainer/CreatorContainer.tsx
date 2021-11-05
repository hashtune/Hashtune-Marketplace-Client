import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import fetchData from '../../../lib/artworks'
import { ListCreatorFieldsProp } from "../../../lib/interfaces/CreatorInterfaces";
import ListCreator from "../ListCreator/ListCreator";
import SortDropDown from "./SortDropdown";

const CreatorContainer = (props: ListCreatorFieldsProp) => {
  let creatorImage = "/images/creator.png"; //Hardcoded for now
  return (
    <div>
      <h3>All Artists</h3>
      <SortDropDown />
      {/* <InfiniteScroll next={fetchData} hasMore={} children={fetchData} loader={undefined} dataLength={undefined}> */}
      <ul>
        {props.creators.map((creator) => (
          <li key={creator.id}>
            <ListCreator user={creator} />
          </li>
        ))}
      </ul>
      {/* </InfiniteScroll> */}
    </div>
  );
};
export default CreatorContainer;
