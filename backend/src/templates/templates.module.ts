import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { TemplatesResolver } from './templates.resolver';
import { TemplatesService } from './templates.service';

@Module({
  providers: [TemplatesResolver, TemplatesService, PrismaService],
})
export class TemplatesModule {}
