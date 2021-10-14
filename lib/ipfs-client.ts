import { create } from "ipfs-http-client";
import { ArtworkFields } from './interfaces/ArtworkInterfaces';

const IPFS_HOST = 'ipfs.infura.io';
const IPFS_PORT = 5001;
const IPFS_PROTOCOL = 'https';

export default class IPFSClient {

    static ipfsApi = create({host: IPFS_HOST, port: IPFS_PORT, protocol: IPFS_PROTOCOL});

    async addNftData( data: ArtworkFields ) {
        const dataJson = JSON.stringify(data);
        try {
            const res = await IPFSClient.ipfsApi.add(dataJson);
            return res;
        } catch (err) {
            console.error(err);
        }
    }

    async addMusicFile( file: File ) {
        try {
            const res = await IPFSClient.ipfsApi.add(file);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
}