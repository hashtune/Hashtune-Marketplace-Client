import { gql } from "@apollo/client";

export const queryListCreators = gql`
    query AllListCreatorsQuery {
      listCreators {
        id
        fullName
        image
      }
    }
  `
export const queryCreators = gql`
    query AllListCreatorsQuery {
      listCreators {
        id
        fullName
        image
        handle
        bio
      }
    }
  `