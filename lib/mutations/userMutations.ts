import { gql } from "@apollo/client";

export const registerUser = gql`
  mutation RegisterUserMutation($inputType: RegisterUserInput) {
    registerUser(InputType: $inputType) {
      Users {
        fullName
        handle
        email
        bio
        wallet {
          id
          publicKey
          createdAt
          provider
        }
      }
    }
  }
`;
