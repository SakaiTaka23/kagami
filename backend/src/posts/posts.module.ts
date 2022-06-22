import { Module } from '@nestjs/common';
import { FollowsService } from 'src/follows/follows.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagsService } from 'src/tags/tags.service';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService, TagsService, FollowsService, PrismaService],
})
export class PostsModule {}
