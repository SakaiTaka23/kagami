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
  /** Date custom scalar type */
  Date: any;
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
  postCreate: Post;
  updateUserProfile: User;
};


export type MutationCreateUserArgs = {
  username: UserName;
};


export type MutationFollowToggleArgs = {
  userName: Scalars['String'];
};


export type MutationPostCreateArgs = {
  content: Scalars['String'];
};


export type MutationUpdateUserProfileArgs = {
  profileEditInput: ProfileEditInput;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type ProfileEditInput = {
  accountName: Scalars['String'];
  profile: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  isFollowing: Scalars['Boolean'];
  postDetail?: Maybe<Post>;
  postUser: Array<Post>;
  timeline: Array<Post>;
  user?: Maybe<User>;
  userFromToken: User;
  userFromUserName?: Maybe<User>;
};


export type QueryIsFollowingArgs = {
  userName: Scalars['String'];
};


export type QueryPostDetailArgs = {
  id: Scalars['String'];
  userName: Scalars['String'];
};


export type QueryPostUserArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
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
  profile: Scalars['String'];
  userName: Scalars['String'];
};

export type UserName = {
  accountName: Scalars['String'];
  userName: Scalars['String'];
};

export type PostCreateMutationVariables = Exact<{
  content: Scalars['String'];
}>;


export type PostCreateMutation = { __typename?: 'Mutation', postCreate: { __typename?: 'Post', id: string, user: { __typename?: 'User', userName: string } } };

export type CreateUserMutationVariables = Exact<{
  username: UserName;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type FollowToggleMutationVariables = Exact<{
  userName: Scalars['String'];
}>;


export type FollowToggleMutation = { __typename?: 'Mutation', followToggle: { __typename?: 'Follow', followingId: string } };

export type UpdateUserProfileMutationVariables = Exact<{
  profileEditInput: ProfileEditInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'User', userName: string } };

export type TimeLineQueryVariables = Exact<{
  take: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type TimeLineQuery = { __typename?: 'Query', timeline: Array<{ __typename?: 'Post', id: string, content: string, createdAt: any, userId: string, user: { __typename?: 'User', accountName: string, userName: string } }> };

export type PostDetailQueryVariables = Exact<{
  postDetailId: Scalars['String'];
  userName: Scalars['String'];
}>;


export type PostDetailQuery = { __typename?: 'Query', postDetail?: { __typename?: 'Post', content: string, createdAt: any, user: { __typename?: 'User', accountName: string, userName: string } } | null };

export type UserFromTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type UserFromTokenQuery = { __typename?: 'Query', userFromToken: { __typename?: 'User', id: string } };

export type UserFromIdQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserFromIdQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string } | null };

export type UserProfileQueryVariables = Exact<{
  userName: Scalars['String'];
  take: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type UserProfileQuery = { __typename?: 'Query', isFollowing: boolean, userFromUserName?: { __typename?: 'User', accountName: string, userName: string, profile: string } | null, postUser: Array<{ __typename?: 'Post', id: string, content: string, createdAt: any, user: { __typename?: 'User', accountName: string, userName: string } }> };

export type EditProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type EditProfileQuery = { __typename?: 'Query', userFromToken: { __typename?: 'User', accountName: string, profile: string } };


export const PostCreateDocument = gql`
    mutation PostCreate($content: String!) {
  postCreate(content: $content) {
    id
    user {
      userName
    }
  }
}
    `;
export type PostCreateMutationFn = Apollo.MutationFunction<PostCreateMutation, PostCreateMutationVariables>;

/**
 * __usePostCreateMutation__
 *
 * To run a mutation, you first call `usePostCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCreateMutation, { data, loading, error }] = usePostCreateMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
export function usePostCreateMutation(baseOptions?: Apollo.MutationHookOptions<PostCreateMutation, PostCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostCreateMutation, PostCreateMutationVariables>(PostCreateDocument, options);
      }
export type PostCreateMutationHookResult = ReturnType<typeof usePostCreateMutation>;
export type PostCreateMutationResult = Apollo.MutationResult<PostCreateMutation>;
export type PostCreateMutationOptions = Apollo.BaseMutationOptions<PostCreateMutation, PostCreateMutationVariables>;
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
    mutation FollowToggle($userName: String!) {
  followToggle(userName: $userName) {
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
 *      userName: // value for 'userName'
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
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($profileEditInput: ProfileEditInput!) {
  updateUserProfile(profileEditInput: $profileEditInput) {
    userName
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      profileEditInput: // value for 'profileEditInput'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const TimeLineDocument = gql`
    query TimeLine($take: Int!, $cursor: String) {
  timeline(take: $take, cursor: $cursor) {
    id
    content
    createdAt
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
    createdAt
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
export const UserProfileDocument = gql`
    query UserProfile($userName: String!, $take: Int!, $cursor: String) {
  userFromUserName(userName: $userName) {
    accountName
    userName
    profile
  }
  isFollowing(userName: $userName)
  postUser(userName: $userName, take: $take, cursor: $cursor) {
    id
    content
    createdAt
    user {
      accountName
      userName
    }
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const EditProfileDocument = gql`
    query EditProfile {
  userFromToken {
    accountName
    profile
  }
}
    `;

/**
 * __useEditProfileQuery__
 *
 * To run a query within a React component, call `useEditProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useEditProfileQuery(baseOptions?: Apollo.QueryHookOptions<EditProfileQuery, EditProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditProfileQuery, EditProfileQueryVariables>(EditProfileDocument, options);
      }
export function useEditProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditProfileQuery, EditProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditProfileQuery, EditProfileQueryVariables>(EditProfileDocument, options);
        }
export type EditProfileQueryHookResult = ReturnType<typeof useEditProfileQuery>;
export type EditProfileLazyQueryHookResult = ReturnType<typeof useEditProfileLazyQuery>;
export type EditProfileQueryResult = Apollo.QueryResult<EditProfileQuery, EditProfileQueryVariables>;