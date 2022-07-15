import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

import { TempFavoriteService } from './temp_favorite.service';

@Resolver('TempFavorite')
export class TempFavoriteResolver {
  constructor(private readonly tempFavoriteService: TempFavoriteService) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('likeTemplateToggle')
  async toggle(@CurrentUserID() userId: string, @Args('id') templateId: string) {
    // お気に入りカウント
    const count = await this.tempFavoriteService.count(userId);
    if (count >= 10) {
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
    }
    console.log(templateId);

    // お気に入りか判定
    // 判断して操作
  }
}
