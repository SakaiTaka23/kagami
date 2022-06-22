import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { TagsService } from './tags.service';

@Module({
  providers: [TagsService, PrismaService],
})
export class TagsModule {}
