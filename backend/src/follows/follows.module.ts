import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

import { FollowsResolver } from './follows.resolver';
import { FollowsService } from './follows.service';

@Module({
  providers: [FollowsResolver, FollowsService, UsersService, PrismaService],
})
export class FollowsModule {}
