import { gql } from "@apollo/client";

export const queryListCreators = gql`
  query AllListCreatorsQuery {
    listCreators {
      id
      fullName
      image
    }
  }
`;
export const queryCreators = gql`
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
