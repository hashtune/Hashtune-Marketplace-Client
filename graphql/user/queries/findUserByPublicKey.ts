import { gql } from "@apollo/client";

export const findUserByPublicKeyQuery = gql`
  query findUserByPublicKey(
    $findUserHandle: String
    $findUserPublicKey: String
  ) {
    findUser(handle: $findUserHandle, publicKey: $findUserPublicKey) {
      Users {
        handle
      }
      ClientErrorUserNotFound {
        message
      }
      ClientErrorUnknown {
        message
      }
      ClientErrorJWTInvalid {
        message
      }
    }
  }
`;
