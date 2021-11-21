import { gql } from "@apollo/client";

export const login = gql`
  mutation Signup(
    $signedMessage: String!
    $publicKey: String!
    $typedData: String!
  ) {
    cookie(
      signedMessage: $signedMessage
      publicKey: $publicKey
      typedData: $typedData
    )
  }
`;
