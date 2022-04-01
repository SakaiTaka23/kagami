import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  getMany(take: number, cursor?: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findMany({
      take,
      skip: 1,
      cursor,
      include: {
        user: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
}
