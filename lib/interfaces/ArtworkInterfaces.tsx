import { Artwork } from "../../graphql/generated/apolloComponents";
export interface ListArtworkProps {
  artwork: Artwork;
  imageSize?: number;
  page?: string;
}
export interface ListArtworksProps {
  artworks: Artwork[];
  type: string;
}
