export interface ArtworkFields {
  id: string;
  handle: string;
  title: string;
  saleType: string;
  image?: string;
  description: string;
  creator: {
    fullName: string;
    id: string;
    handle: string;
    image: string;
  };
  listed: boolean;
  reservePrice: number;
  price: number;
  auctions: {
    bids: {
      id: string;
    }[];
  }[];
  auctionWithNoReservePriceAndNoBids: boolean;
  // liveAt?: Date,
  latestAuction: {
    bids: {
      id: string;
    }[];
    currentHigh: number;
  };
}
export interface ArtworkFieldsProp {
  artwork: ArtworkFields;
}
export interface ListArtworkFields {
  id: string;
  handle: string;
  title: string;
  saleType: string;
  image?: string;
  description: string;
  creator: {
    fullName: string;
    id: string;
    handle: string;
    image: string;
  };
  listed: boolean;
  reservePrice: number;
  price: number;
  auctions: {
    bids: {
      id: string;
    }[];
  }[];
  auctionWithNoReservePriceAndNoBids: boolean;
  // liveAt?: Date,
  latestAuction: {
    bids: {
      id: string;
    }[];
    currentHigh: number;
  };
}

export interface ListArtworkFieldsProp {
  artwork: ListArtworkFields;
  imageSize?: number;
  userPage?: boolean;
}
export interface ListArtworksFieldsProp {
  artworks: ListArtworkFields[];
  type: string;
}
