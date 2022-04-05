import { Args, Query, Resolver } from '@nestjs/graphql';

import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query('timeline')
  getPosts(@Args('take') take: number, @Args('cursor') cursor?: string) {
    const cursorObj = cursor === undefined ? undefined : { id: cursor };
    return this.postsService.getMany(take, cursorObj);
  }

  @Query('postDetail')
  detail(@Args('id') id: string) {
    return this.postsService.findFromID(id);
  }
}
