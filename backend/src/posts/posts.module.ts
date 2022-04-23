import { Module } from '@nestjs/common';
import { FollowsService } from 'src/follows/follows.service';
import { PrismaService } from 'src/prisma/prisma.service';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolver, PostsService, FollowsService, PrismaService],
})
export class PostsModule {}
