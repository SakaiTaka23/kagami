import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TempFavoriteService {
  constructor(private prisma: PrismaService) {}

  count(userId: string) {
    return this.prisma.userFavoriteTemplate.count({
      where: {
        userId,
      },
    });
  }
}
