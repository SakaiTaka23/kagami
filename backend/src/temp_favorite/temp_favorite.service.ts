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

  isLiked(templateId: string, userId: string) {
    return this.prisma.userFavoriteTemplate.count({
      where: {
        templateId,
        userId,
      },
    });
  }

  like(templateId: string, userId: string) {
    return this.prisma.userFavoriteTemplate.create({
      data: {
        templateId,
        userId,
      },
    });
  }

  unLike(templateId: string, userId: string) {
    return this.prisma.userFavoriteTemplate.delete({
      where: {
        templateId_userId: {
          templateId,
          userId,
        },
      },
    });
  }
}
