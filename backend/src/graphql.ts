
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTemplateInput {
    content: string;
}

export class UserName {
    accountName: string;
    userName: string;
}

export class ProfileEditInput {
    accountName: string;
    profile: string;
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

    abstract postsFromTag(tag: string, take: number, cursor?: Nullable<string>): Post[] | Promise<Post[]>;

    abstract userFromToken(): User | Promise<User>;

    abstract userFromUserName(userName: string): Nullable<User> | Promise<Nullable<User>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract followToggle(userName: string): Follow | Promise<Follow>;

    abstract postCreate(content: string): Post | Promise<Post>;

    abstract createTemplate(template?: Nullable<CreateTemplateInput>): Nullable<Template> | Promise<Nullable<Template>>;

    abstract createUser(username: UserName): User | Promise<User>;

    abstract updateUserProfile(profileEditInput: ProfileEditInput): User | Promise<User>;
}

export class Post {
    id: string;
    content: string;
    createdAt: Date;
    user: User;
    userId: string;
}

export class Template {
    id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    userId: string;
}

export class User {
    id: string;
    accountName: string;
    userName: string;
    profile: string;
}

type Nullable<T> = T | null;
