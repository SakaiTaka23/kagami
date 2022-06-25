import { Query, Args, Resolver } from '@nestjs/graphql';

import { TagsService } from './tags.service';

@Resolver()
export class TagsResolver {
  constructor(private readonly tagsService: TagsService) {}

  @Query('postsFromTag')
  search(@Args('tag') tag: string, @Args('take') take: number, @Args('cursor') cursor?: string) {
    const cursorObj = cursor === undefined ? undefined : { name: cursor };
    return this.tagsService.detail(tag, take, cursorObj);
  }
}
