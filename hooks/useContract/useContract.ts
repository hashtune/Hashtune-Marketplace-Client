import { ethers } from "ethers";
import HastuneMarketPlace from "../../utils/ABI/SongOrAlbumNFT.json";
import { SongOrAlbumNFT } from "../../utils/types/hashtune-contract-types";

export const useContract = () => {
    const contract = new ethers.Contract("0xAf266B3D45B11D8B3f28dc2427745c3970B0368C", HastuneMarketPlace.abi);
    return contract as SongOrAlbumNFT;
};