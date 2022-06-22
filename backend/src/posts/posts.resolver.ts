import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { FollowsService } from 'src/follows/follows.service';
import { TagsService } from 'src/tags/tags.service';

import { PostsContentValidationPipe } from './posts-content-validation.pipe';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
    private readonly followsService: FollowsService,
    private readonly tagsService: TagsService
  ) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('postCreate')
  create(@CurrentUserID() id: string, @Args('content', PostsContentValidationPipe) content: string) {
    const tags = this.tagsService.findFromContent(content);
    return this.postsService.create(id, content, tags);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('timeline')
  async getPosts(@CurrentUserID() id: string, @Args('take') take: number, @Args('cursor') cursor?: string) {
    const cursorObj = cursor === undefined ? undefined : { id: cursor };
    const following = await this.followsService.follows(id);
    return this.postsService.getMany(id, following, take, cursorObj);
  }

  @Query('postDetail')
  detail(@Args('id') id: string, @Args('userName') userName: string) {
    return this.postsService.findDetail(id, userName);
  }

  @Query('postUser')
  user(@Args('userName') userName: string, @Args('take') take: number, @Args('cursor') cursor?: string) {
    const cursorObj = cursor === undefined ? undefined : { id: cursor };
    return this.postsService.user(userName, take, cursorObj);
  }
}
