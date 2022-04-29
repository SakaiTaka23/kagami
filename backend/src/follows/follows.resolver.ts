import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { OptionalAuthGuard } from 'src/auth/optional-auth.guard';
import { UsersService } from 'src/users/users.service';

import { FollowsService } from './follows.service';

@Resolver('Follow')
export class FollowsResolver {
  constructor(private readonly followsService: FollowsService, private readonly usersService: UsersService) {}

  @UseGuards(OptionalAuthGuard)
  @Query('isFollowing')
  following(@CurrentUserID() id: string, @Args('userName') userName: string) {
    if (id === undefined) return false;
    return this.followsService.isFollowing(id, userName);
  }

  @UseGuards(FirebaseAuthGuard)
  @Mutation('followToggle')
  async toggle(@CurrentUserID() id: string, @Args('userName') userName: string) {
    const isFollowing = await this.followsService.isFollowing(id, userName);
    const user = await this.usersService.fromUserName(userName);
    if (isFollowing === 0) {
      return this.followsService.follow(id, user.id).catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2003') {
            throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
          }
        }
      });
    }
    return this.followsService.unFollow(id, user.id);
  }
}
