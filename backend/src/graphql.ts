
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

export class Post {
    id: string;
    content: string;
    user: User;
    userId: string;
}

export abstract class IQuery {
    abstract timeline(take: number, cursor?: Nullable<string>): Post[] | Promise<Post[]>;

    abstract postDetail(id: string): Nullable<Post> | Promise<Nullable<Post>>;

    abstract userFromToken(): User | Promise<User>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    accountName: string;
    userName: string;
}

export abstract class IMutation {
    abstract createUser(username: UserName): User | Promise<User>;
}

type Nullable<T> = T | null;
