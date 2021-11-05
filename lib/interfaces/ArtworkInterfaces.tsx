import { Artwork } from "../../graphql/generated/apolloComponents";
export interface ListArtworkProps {
  artwork: Artwork;
  imageSize?: number;
  userPage?: boolean;
}
export interface ListArtworksProps {
  artworks: Artwork[];
  type: string;
}
