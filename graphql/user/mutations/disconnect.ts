import { gql } from "@apollo/client";

export const disconnectUser = gql`
  mutation disconnectUser {
    disconnected
  }
`;
