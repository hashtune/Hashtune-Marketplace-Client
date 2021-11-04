import { ethers, Signer } from "ethers";
import HastuneMarketPlace from "../../utils/ABI/SongOrAlbumNFT.json";
import { SongOrAlbumNFT } from "../../utils/types/hashtune-contract-types";

export const useContract = (signer: Signer | null) => {
    if(signer) {
        const contract = new ethers.Contract("0xAf266B3D45B11D8B3f28dc2427745c3970B0368C", HastuneMarketPlace.abi, signer);
        return contract as SongOrAlbumNFT;
    }
    return null;
};