
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

export class User {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract userFromToken(): User | Promise<User>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(username: UserName): User | Promise<User>;
}

type Nullable<T> = T | null;
