
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserName {
    accountName: string;
    userName: string;
}

export class Follow {
    followerId: string;
    followingId: string;
}

export abstract class IQuery {
    abstract isFollowing(userName: string): boolean | Promise<boolean>;

    abstract timeline(take: number, cursor?: Nullable<string>): Post[] | Promise<Post[]>;

    abstract postUser(userName: string, take: number, cursor?: Nullable<string>): Post[] | Promise<Post[]>;

    abstract postDetail(id: string, userName: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract userFromToken(): User | Promise<User>;

    abstract userFromUserName(userName: string): Nullable<User> | Promise<Nullable<User>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract followToggle(userName: string): Follow | Promise<Follow>;

    abstract postCreate(content: string): Post | Promise<Post>;

    abstract createUser(username: UserName): User | Promise<User>;
}

export class Post {
    id: string;
    content: string;
    user: User;
    userId: string;
}

export class User {
    id: string;
    accountName: string;
    userName: string;
}

type Nullable<T> = T | null;
