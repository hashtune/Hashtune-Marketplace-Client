import { gql } from "@apollo/client";

export const listCreatorsQuery = gql`
  query AllListCreatorsQuery {
    listCreators {
      Users {
        id
        fullName
        image
        handle
        bio
        email
        wallet {
          provider
          publicKey
        }
        isApprovedCreator
      }
      ClientErrorUserNotFound {
        message
      }
      ClientErrorUnknown {
        message
      }
    }
  }
`;
