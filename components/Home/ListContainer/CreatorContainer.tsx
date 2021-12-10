import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import fetchData from '../../../lib/artworks'
import { ListCreatorFieldsProp } from "../../../lib/interfaces/CreatorInterfaces";
import ListCreator from "../ListCreator/ListCreator";
import SortDropDown from "./SortDropdown";
import styles from "./Creator.module.scss";
import Link from "next/link";

const CreatorContainer = (props: ListCreatorFieldsProp) => {
  let creatorImage = "/images/creator.png"; //Hardcoded for now
  return (
    <div>
      <h3>All Artists</h3>
      <SortDropDown />
      {/* <InfiniteScroll next={fetchData} hasMore={} children={fetchData} loader={undefined} dataLength={undefined}> */}
      <div className={styles["users__container"]}>
        {props.creators.map((creator) => (
          <div key={creator.id} className={styles["users__item"]}>
            <Link href={"/" + creator.handle}>
              <a>
                <ListCreator
                  fullName={creator.fullName}
                  image={creatorImage}
                  id={creator.id}
                  handle={creator.handle}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* </InfiniteScroll> */}
    </div>
  );
};
export default CreatorContainer;
