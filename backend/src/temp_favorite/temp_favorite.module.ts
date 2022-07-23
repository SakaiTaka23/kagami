import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { TempFavoriteResolver } from './temp_favorite.resolver';
import { TempFavoriteService } from './temp_favorite.service';

@Module({
  providers: [TempFavoriteResolver, TempFavoriteService, PrismaService],
})
export class TempFavoriteModule {}
