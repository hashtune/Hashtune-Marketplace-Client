import { gql } from "@apollo/client";

export const registerUserMutation = gql`
  mutation RegisterUser($inputType: RegisterUserInput) {
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
      ClientErrorHandleAlreadyExists {
        message
      }
      ClientErrorInvalidHandle {
        message
      }
      ClientErrorUnknown {
        message
      }
    }
  }
`;
