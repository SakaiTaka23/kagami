import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Follow = {
  __typename?: 'Follow';
  followerId: Scalars['String'];
  followingId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  followToggle: Follow;
};


export type MutationCreateUserArgs = {
  username: UserName;
};


export type MutationFollowToggleArgs = {
  followingId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  id: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  postDetail?: Maybe<Post>;
  timeline: Array<Post>;
  user?: Maybe<User>;
  userFromToken: User;
  userFromUserName?: Maybe<User>;
};


export type QueryPostDetailArgs = {
  id: Scalars['String'];
  userName: Scalars['String'];
};


export type QueryTimelineArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUserFromUserNameArgs = {
  userName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accountName: Scalars['String'];
  id: Scalars['String'];
  userName: Scalars['String'];
};

export type UserName = {
  accountName: Scalars['String'];
  userName: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  username: UserName;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type FollowToggleMutationVariables = Exact<{
  followingId: Scalars['String'];
}>;


export type FollowToggleMutation = { __typename?: 'Mutation', followToggle: { __typename?: 'Follow', followingId: string } };

export type TimeLineQueryVariables = Exact<{
  take: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type TimeLineQuery = { __typename?: 'Query', timeline: Array<{ __typename?: 'Post', id: string, content: string, userId: string, user: { __typename?: 'User', accountName: string, userName: string } }> };

export type PostDetailQueryVariables = Exact<{
  postDetailId: Scalars['String'];
  userName: Scalars['String'];
}>;


export type PostDetailQuery = { __typename?: 'Query', postDetail?: { __typename?: 'Post', content: string, user: { __typename?: 'User', accountName: string, userName: string } } | null };

export type UserFromTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type UserFromTokenQuery = { __typename?: 'Query', userFromToken: { __typename?: 'User', id: string } };

export type UserFromIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserFromIdQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string } | null };

export type UserFromUserNameQueryVariables = Exact<{
  userName: Scalars['String'];
}>;


export type UserFromUserNameQuery = { __typename?: 'Query', userFromUserName?: { __typename?: 'User', accountName: string, userName: string } | null };


export const CreateUserDocument = gql`
    mutation CreateUser($username: UserName!) {
  createUser(username: $username) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const FollowToggleDocument = gql`
    mutation FollowToggle($followingId: String!) {
  followToggle(followingId: $followingId) {
    followingId
  }
}
    `;
export type FollowToggleMutationFn = Apollo.MutationFunction<FollowToggleMutation, FollowToggleMutationVariables>;

/**
 * __useFollowToggleMutation__
 *
 * To run a mutation, you first call `useFollowToggleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowToggleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followToggleMutation, { data, loading, error }] = useFollowToggleMutation({
 *   variables: {
 *      followingId: // value for 'followingId'
 *   },
 * });
 */
export function useFollowToggleMutation(baseOptions?: Apollo.MutationHookOptions<FollowToggleMutation, FollowToggleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowToggleMutation, FollowToggleMutationVariables>(FollowToggleDocument, options);
      }
export type FollowToggleMutationHookResult = ReturnType<typeof useFollowToggleMutation>;
export type FollowToggleMutationResult = Apollo.MutationResult<FollowToggleMutation>;
export type FollowToggleMutationOptions = Apollo.BaseMutationOptions<FollowToggleMutation, FollowToggleMutationVariables>;
export const TimeLineDocument = gql`
    query TimeLine($take: Int!, $cursor: String) {
  timeline(take: $take, cursor: $cursor) {
    id
    content
    userId
    user {
      accountName
      userName
    }
  }
}
    `;

/**
 * __useTimeLineQuery__
 *
 * To run a query within a React component, call `useTimeLineQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeLineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeLineQuery({
 *   variables: {
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useTimeLineQuery(baseOptions: Apollo.QueryHookOptions<TimeLineQuery, TimeLineQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeLineQuery, TimeLineQueryVariables>(TimeLineDocument, options);
      }
export function useTimeLineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeLineQuery, TimeLineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeLineQuery, TimeLineQueryVariables>(TimeLineDocument, options);
        }
export type TimeLineQueryHookResult = ReturnType<typeof useTimeLineQuery>;
export type TimeLineLazyQueryHookResult = ReturnType<typeof useTimeLineLazyQuery>;
export type TimeLineQueryResult = Apollo.QueryResult<TimeLineQuery, TimeLineQueryVariables>;
export const PostDetailDocument = gql`
    query PostDetail($postDetailId: String!, $userName: String!) {
  postDetail(id: $postDetailId, userName: $userName) {
    content
    user {
      accountName
      userName
    }
  }
}
    `;

/**
 * __usePostDetailQuery__
 *
 * To run a query within a React component, call `usePostDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostDetailQuery({
 *   variables: {
 *      postDetailId: // value for 'postDetailId'
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function usePostDetailQuery(baseOptions: Apollo.QueryHookOptions<PostDetailQuery, PostDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostDetailQuery, PostDetailQueryVariables>(PostDetailDocument, options);
      }
export function usePostDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostDetailQuery, PostDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostDetailQuery, PostDetailQueryVariables>(PostDetailDocument, options);
        }
export type PostDetailQueryHookResult = ReturnType<typeof usePostDetailQuery>;
export type PostDetailLazyQueryHookResult = ReturnType<typeof usePostDetailLazyQuery>;
export type PostDetailQueryResult = Apollo.QueryResult<PostDetailQuery, PostDetailQueryVariables>;
export const UserFromTokenDocument = gql`
    query UserFromToken {
  userFromToken {
    id
  }
}
    `;

/**
 * __useUserFromTokenQuery__
 *
 * To run a query within a React component, call `useUserFromTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFromTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFromTokenQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserFromTokenQuery(baseOptions?: Apollo.QueryHookOptions<UserFromTokenQuery, UserFromTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFromTokenQuery, UserFromTokenQueryVariables>(UserFromTokenDocument, options);
      }
export function useUserFromTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFromTokenQuery, UserFromTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFromTokenQuery, UserFromTokenQueryVariables>(UserFromTokenDocument, options);
        }
export type UserFromTokenQueryHookResult = ReturnType<typeof useUserFromTokenQuery>;
export type UserFromTokenLazyQueryHookResult = ReturnType<typeof useUserFromTokenLazyQuery>;
export type UserFromTokenQueryResult = Apollo.QueryResult<UserFromTokenQuery, UserFromTokenQueryVariables>;
export const UserFromIdDocument = gql`
    query UserFromID($userId: String!) {
  user(id: $userId) {
    id
  }
}
    `;

/**
 * __useUserFromIdQuery__
 *
 * To run a query within a React component, call `useUserFromIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFromIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFromIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserFromIdQuery(baseOptions: Apollo.QueryHookOptions<UserFromIdQuery, UserFromIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFromIdQuery, UserFromIdQueryVariables>(UserFromIdDocument, options);
      }
export function useUserFromIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFromIdQuery, UserFromIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFromIdQuery, UserFromIdQueryVariables>(UserFromIdDocument, options);
        }
export type UserFromIdQueryHookResult = ReturnType<typeof useUserFromIdQuery>;
export type UserFromIdLazyQueryHookResult = ReturnType<typeof useUserFromIdLazyQuery>;
export type UserFromIdQueryResult = Apollo.QueryResult<UserFromIdQuery, UserFromIdQueryVariables>;
export const UserFromUserNameDocument = gql`
    query UserFromUserName($userName: String!) {
  userFromUserName(userName: $userName) {
    accountName
    userName
  }
}
    `;

/**
 * __useUserFromUserNameQuery__
 *
 * To run a query within a React component, call `useUserFromUserNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFromUserNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFromUserNameQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useUserFromUserNameQuery(baseOptions: Apollo.QueryHookOptions<UserFromUserNameQuery, UserFromUserNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserFromUserNameQuery, UserFromUserNameQueryVariables>(UserFromUserNameDocument, options);
      }
export function useUserFromUserNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserFromUserNameQuery, UserFromUserNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserFromUserNameQuery, UserFromUserNameQueryVariables>(UserFromUserNameDocument, options);
        }
export type UserFromUserNameQueryHookResult = ReturnType<typeof useUserFromUserNameQuery>;
export type UserFromUserNameLazyQueryHookResult = ReturnType<typeof useUserFromUserNameLazyQuery>;
export type UserFromUserNameQueryResult = Apollo.QueryResult<UserFromUserNameQuery, UserFromUserNameQueryVariables>;