import React, { useState } from "react";
import { ListArtworksFieldsProp } from "../../../lib/interfaces/ArtworkInterfaces";
import TabNav from "./Tabnav";
import Tab from "./Tab"
import ArtworkContainer from "./ArtworkContainer";


const TabsListArtworks = (props: ListArtworksFieldsProp) => {

  const [tabState, setTabState] = useState("All Hashtunes")
  return (
    <div>
      <TabNav tabs={['All Hashtunes', 'Auctions', 'Buy Now']} selected={ tabState } setSelected={ setTabState}>
          <Tab isSelected={ tabState === 'All Hashtunes' }>
            <ArtworkContainer type = 'All Hashtunes'  artworks={props.artworks}/>
          </Tab>
          <Tab isSelected={ tabState === 'Auctions' }>
            <ArtworkContainer type = 'Auctions' artworks={[]}/>
          </Tab>
          <Tab isSelected={ tabState === 'Buy Now' }>
            <ArtworkContainer type= 'Buy Now'  artworks={[]}/>
          </Tab>
        </TabNav>
    </div>
  );
};
export default TabsListArtworks;
