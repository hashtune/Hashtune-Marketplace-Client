import React, { useState } from 'react';
import { ArtworkFields } from '../lib/interfaces/ArtworkInterfaces';
import IPFSClient from '../lib/ipfs-client';

const IPFS: React.FC = () => {
    const ipfs = new IPFSClient();
    const [file, setFile] = useState<File>();
    const [fileUrl, setFileUrl] = useState<string>('Try the upload buttons');
    const nftData: ArtworkFields = {
        id: '',
        handle: '',
        title: '',
        saleType: '',
        description: '',
        creator: {
            fullName: '',
            id: '',
            handle: '',
            image: ''
        },
        listed: false,
        reservePrice: 0,
        price: 0,
        auctions: [],
        auctionWithNoReservePriceAndNoBids: false,
        latestAuction: {
            bids: [],
            currentHigh: 0
        }
    };

    const fileChange = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.files) {
            setFile(e.currentTarget.files[0]);
        }
    }
    const uploadFile = async () => {
        setFileUrl('');
        if(file) {
            await ipfs.addMusicFile(file).then((res) => {
                setFileUrl(`https://ipfs.io/ipfs/${res?.path}`);
            });
        }
    }

    const uploadData = async () => {
        setFileUrl('');
        await ipfs.addNftData(nftData).then((res) => {
            setFileUrl(`https://ipfs.io/ipfs/${res?.path}`);
        })
    }

    return (
        <>
        <button onClick={uploadData}>Upload mock data</button>
        <button onClick={uploadFile}>Upload File</button>
        <input type="file" id="musicfile" onChange={fileChange}/>
        {fileUrl ? <a href={fileUrl}>{fileUrl}</a> : 'uploading....' }
        </>
    );
};

export default IPFS;