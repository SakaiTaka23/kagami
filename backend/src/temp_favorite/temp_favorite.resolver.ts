import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { OptionalAuthGuard } from 'src/auth/optional-auth.guard';

import { TempFavoriteService } from './temp_favorite.service';

@Resolver('TempFavorite')
export class TempFavoriteResolver {
  constructor(private readonly tempFavoriteService: TempFavoriteService) {}

  @UseGuards(OptionalAuthGuard)
  @Query('likeTemplateCheck')
  async check(@CurrentUserID() userId: string, @Args('id') id: string) {
    if (userId === undefined) {
      return false;
    }
    return !!(await this.tempFavoriteService.isLiked(id, userId));
  }

  @Query('likeList')
  user(@Args('userName') userName: string) {
    return this.tempFavoriteService.findUser(userName);
  }

  @UseGuards(FirebaseAuthGuard)
  @Mutation('likeTemplateToggle')
  async toggle(@CurrentUserID() userId: string, @Args('id') id: string) {
    // お気に入りカウント
    const count = await this.tempFavoriteService.count(userId);

    if (count >= 10) {
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
    }
    // お気に入りか判定
    const isLiked = await this.tempFavoriteService.isLiked(id, userId);
    // 判断して操作
    if (isLiked === 0) {
      await this.tempFavoriteService.like(id, userId);
    } else {
      await this.tempFavoriteService.unLike(id, userId);
    }
    return id;
  }
}
