
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserName {
    name: string;
}

export class Post {
    id: string;
    content: string;
    user: User;
    userId: string;
}

export abstract class IQuery {
    abstract timeline(take: number, cursor?: Nullable<string>): Post[] | Promise<Post[]>;

    abstract userFromToken(): User | Promise<User>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    name: string;
}

export abstract class IMutation {
    abstract createUser(username: UserName): User | Promise<User>;
}

type Nullable<T> = T | null;
