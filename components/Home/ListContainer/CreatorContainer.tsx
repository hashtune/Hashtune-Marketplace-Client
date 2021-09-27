import React from "react";
import { ArtworkProp } from "../ListArtwork/ListArtwork";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchData from '../../../lib/artworks'
import ListArtwork from "../ListArtwork/ListArtwork";
import Tab from '../../Layout/Navbar/Tab'
import { useRouter } from "next/dist/client/router";
import ListCreator, {CreatorList} from '../ListCreator/ListCreator'


const CreatorContainer = (props: CreatorList) => {
    return (
        <div>
            <Tab href={""} isSelected={false} title={""}/>
            <InfiniteScroll next={fetchData} hasMore={} children={fetchData} loader={undefined} dataLength={undefined}>
                <ul> 
                    {props.creators.map(creator => (
                        <li key={creator.id}>
                            <ListCreator name={creator.name} handle={creator.handle} image={creator.image} bio={creator.bio} id={creator.id} />
                        </li>
                ))}
                </ul>
            </InfiniteScroll>
        </div>
    )
}
export default CreatorContainer