import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { TagsResolver } from './tags.resolver';
import { TagsService } from './tags.service';

@Module({
  providers: [TagsService, PrismaService, TagsResolver],
})
export class TagsModule {}
