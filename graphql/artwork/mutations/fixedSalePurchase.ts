import { gql } from "@apollo/client";

export const fixedSalePurchase = gql`
  mutation Mutation($inputType: CreateFixedSaleInput) {
    puchaseFixedSaleArtwork(InputType: $inputType) {
      Artworks {
        id
      }
      ClientErrorArtworkNotFound {
        message
      }
      ClientErrorUserUnauthorized {
        message
      }
      ExternalChainError {
        message
      }
      ExternalChainErrorStillPending {
        message
      }
    }
  }
`;
