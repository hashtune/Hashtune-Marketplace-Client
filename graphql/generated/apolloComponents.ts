import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `BigInt` scalar type represents non-fractional signed whole numeric values.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
   */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Bytes: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** An arbitrary-precision Decimal type */
  Decimal: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

/** Auction input */
export type AddAuctionInput = {
  artworkId: Scalars['String'];
  live: Scalars['Boolean'];
  liveAt?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type Artwork = {
  __typename?: 'Artwork';
  Auctions: Array<Auction>;
  auctionWithNoReservePriceAndNoBids: Scalars['Boolean'];
  creator: User;
  description: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  kind: Scalars['String'];
  latestAuction?: Maybe<Auction>;
  listed: Scalars['Boolean'];
  owner?: Maybe<User>;
  pending: Scalars['Boolean'];
  price?: Maybe<Scalars['BigInt']>;
  reservePrice?: Maybe<Scalars['BigInt']>;
  saleType: Scalars['String'];
  title: Scalars['String'];
  txHash: Scalars['String'];
};

export type ArtworkResult = {
  __typename?: 'ArtworkResult';
  Artworks?: Maybe<Array<Artwork>>;
  ClientErrorArgumentsConflict?: Maybe<ClientErrorArgumentsConflict>;
  ClientErrorArtworkNotFound?: Maybe<ClientErrorArtworkNotFound>;
  ClientErrorUnknown?: Maybe<ClientErrorUnknown>;
  ClientErrorUserUnauthorized?: Maybe<ClientErrorUserUnauthorized>;
  ExternalChainError?: Maybe<ExternalChainError>;
  ExternalChainErrorStillPending?: Maybe<ExternalChainErrorStillPending>;
};

export type Auction = {
  __typename?: 'Auction';
  artworkId: Scalars['String'];
  bids: Array<Bid>;
  currentHigh: Scalars['BigInt'];
  id: Scalars['String'];
  liveAt?: Maybe<Scalars['DateTime']>;
};

export type AuctionResult = {
  __typename?: 'AuctionResult';
  Auctions?: Maybe<Array<Auction>>;
  ClientErrorArtworkAlreadyExists?: Maybe<ClientErrorAuctionAlreadyExists>;
  ClientErrorArtworkNotAnAuction?: Maybe<ClientErrorArtworkNotAnAuction>;
  ClientErrorArtworkNotFound?: Maybe<ClientErrorArtworkNotFound>;
  ClientErrorAuctionNotDeletable?: Maybe<ClientErrorAuctionNotDeletable>;
  ClientErrorAuctionNotFound?: Maybe<ClientErrorAuctionNotFound>;
  ClientErrorUnknown?: Maybe<ClientErrorUnknown>;
  ClientErrorUserUnauthorized?: Maybe<ClientErrorUserUnauthorized>;
};

export type Bid = {
  __typename?: 'Bid';
  id: Scalars['String'];
};

export type ClientErrorArgumentsConflict = {
  __typename?: 'ClientErrorArgumentsConflict';
  message?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type ClientErrorArtworkNotAnAuction = {
  __typename?: 'ClientErrorArtworkNotAnAuction';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorArtworkNotFound = {
  __typename?: 'ClientErrorArtworkNotFound';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorAuctionAlreadyExists = {
  __typename?: 'ClientErrorAuctionAlreadyExists';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorAuctionNotDeletable = {
  __typename?: 'ClientErrorAuctionNotDeletable';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorAuctionNotFound = {
  __typename?: 'ClientErrorAuctionNotFound';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorHandleAlreadyExists = {
  __typename?: 'ClientErrorHandleAlreadyExists';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorInvalidHandle = {
  __typename?: 'ClientErrorInvalidHandle';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorUnknown = {
  __typename?: 'ClientErrorUnknown';
  message: Scalars['String'];
};

export type ClientErrorUserNotFound = {
  __typename?: 'ClientErrorUserNotFound';
  message?: Maybe<Scalars['String']>;
};

export type ClientErrorUserUnauthorized = {
  __typename?: 'ClientErrorUserUnauthorized';
  message?: Maybe<Scalars['String']>;
};

/** Artwork input */
export type CreateArtworkInput = {
  creator: Scalars['String'];
  currentOwner: Scalars['String'];
  description: Scalars['String'];
  handle: Scalars['String'];
  image: Scalars['String'];
  link: Scalars['String'];
  media: Scalars['Json'];
  reservePrice?: Maybe<Scalars['BigInt']>;
  salePrice?: Maybe<Scalars['BigInt']>;
  saleType: Scalars['String'];
  title: Scalars['String'];
  txHash: Scalars['String'];
};

export type ExternalChainError = {
  __typename?: 'ExternalChainError';
  message: Scalars['String'];
};

export type ExternalChainErrorStillPending = {
  __typename?: 'ExternalChainErrorStillPending';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add an artwork to the database */
  addArtwork: ArtworkResult;
  /** Create an auction for a given artwork */
  addAuction: AuctionResult;
  /** delete an Auction if it has no bids */
  deleteAuction: AuctionResult;
  /** Register a user after they authenticate with the correct chain network */
  registerUser: UserResult;
  /** edit the price or reserve price of an artwork */
  updateArtwork: ArtworkResult;
};


export type MutationAddArtworkArgs = {
  InputType?: Maybe<CreateArtworkInput>;
};


export type MutationAddAuctionArgs = {
  InputType?: Maybe<AddAuctionInput>;
};


export type MutationDeleteAuctionArgs = {
  auctionId: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  InputType?: Maybe<RegisterUserInput>;
};


export type MutationUpdateArtworkArgs = {
  InputType?: Maybe<UpdateArtworkInput>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns cookie if signing */
  cookie: Scalars['String'];
  /** Find an artwork by id */
  findArtwork: ArtworkResult;
  /** Find an user by handle or public key */
  findUser: UserResult;
  /** Checks whether the give handle is free or not. */
  handle: Scalars['Boolean'];
  /** If only auction argument is true then all auctions are returned. If not then all artworks are returned.  */
  listArtworks: ArtworkResult;
  /** Returns all creators where isApprovedCreator is true */
  listCreators: UserResult;
};


export type QueryFindArtworkArgs = {
  id: Scalars['String'];
};


export type QueryFindUserArgs = {
  handle?: Maybe<Scalars['String']>;
  publicKey?: Maybe<Scalars['String']>;
};


export type QueryHandleArgs = {
  handle?: Maybe<Scalars['String']>;
};


export type QueryListArtworksArgs = {
  auction?: Maybe<Scalars['Boolean']>;
  listed?: Maybe<Scalars['Boolean']>;
};

/** Input for registering a new user */
export type RegisterUserInput = {
  bio?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  isApprovedCreator?: Maybe<Scalars['Boolean']>;
  wallet: Scalars['String'];
};

/** Artwork input */
export type UpdateArtworkInput = {
  artworkId: Scalars['String'];
  reservePrice?: Maybe<Scalars['BigInt']>;
  salePrice?: Maybe<Scalars['BigInt']>;
};

export type User = {
  __typename?: 'User';
  bio: Scalars['String'];
  created: Array<Artwork>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  isApprovedCreator: Scalars['Boolean'];
  owned: Array<Artwork>;
  wallet: Wallet;
};

export type UserResult = {
  __typename?: 'UserResult';
  ClientErrorHandleAlreadyExists?: Maybe<ClientErrorHandleAlreadyExists>;
  ClientErrorInvalidHandle?: Maybe<ClientErrorInvalidHandle>;
  ClientErrorUnknown?: Maybe<ClientErrorUnknown>;
  ClientErrorUserNotFound?: Maybe<ClientErrorUserNotFound>;
  Users?: Maybe<Array<User>>;
};

export type Wallet = {
  __typename?: 'Wallet';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  provider: Scalars['String'];
  publicKey: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type RegisterUserMutationVariables = Exact<{
  inputType?: Maybe<RegisterUserInput>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserResult', Users?: Array<{ __typename?: 'User', fullName: string, handle: string, email: string, bio: string, wallet: { __typename?: 'Wallet', id: string, publicKey: string, createdAt: string, provider: string } }> | null | undefined, ClientErrorHandleAlreadyExists?: { __typename?: 'ClientErrorHandleAlreadyExists', message?: string | null | undefined } | null | undefined, ClientErrorInvalidHandle?: { __typename?: 'ClientErrorInvalidHandle', message?: string | null | undefined } | null | undefined, ClientErrorUnknown?: { __typename?: 'ClientErrorUnknown', message: string } | null | undefined } };

export type QueryQueryVariables = Exact<{
  findUserHandle?: Maybe<Scalars['String']>;
  findUserPublicKey?: Maybe<Scalars['String']>;
}>;


export type QueryQuery = { __typename?: 'Query', findUser: { __typename?: 'UserResult', Users?: Array<{ __typename?: 'User', handle: string }> | null | undefined, ClientErrorUserNotFound?: { __typename?: 'ClientErrorUserNotFound', message?: string | null | undefined } | null | undefined, ClientErrorUnknown?: { __typename?: 'ClientErrorUnknown', message: string } | null | undefined } };

export type LoginQueryVariables = Exact<{ [key: string]: never; }>;


export type LoginQuery = { __typename?: 'Query', cookie: string };


export const RegisterUserDocument = gql`
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
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      inputType: // value for 'inputType'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const QueryDocument = gql`
    query Query($findUserHandle: String, $findUserPublicKey: String) {
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
  }
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *      findUserHandle: // value for 'findUserHandle'
 *      findUserPublicKey: // value for 'findUserPublicKey'
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export const LoginDocument = gql`
    query Login {
  cookie
}
    `;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *   },
 * });
 */
export function useLoginQuery(baseOptions?: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;