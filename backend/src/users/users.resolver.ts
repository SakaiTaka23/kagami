import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { UserName } from 'src/graphql';

import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('createUser')
  create(@CurrentUserID() id: string, @Args('username') username: UserName) {
    return this.usersService.create(id, username.accountName, username.userName);
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('userFromToken')
  findFromToken(@CurrentUserID() id: string) {
    return this.usersService.findOne(id);
  }

  @Query('userFromUserName')
  findFromUserName(@Args('userName') userName: string) {
    return this.usersService.fromUserName(userName);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('isFollowing')
  following(@CurrentUserID() id: string, @Args('followingId') followingId: string) {
    return this.usersService.isFollowing(id, followingId);
  }

  @UseGuards(FirebaseAuthGuard)
  @Mutation('followToggle')
  async toggle(@CurrentUserID() id: string, @Args('followingId') followingId: string) {
    const isFollowing = await this.usersService.isFollowing(id, followingId);
    if (isFollowing === 0) {
      return this.usersService.follow(id, followingId).catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2003') {
            throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
          }
        }
      });
    }
    return this.usersService.unFollow(id, followingId);
  }
}
