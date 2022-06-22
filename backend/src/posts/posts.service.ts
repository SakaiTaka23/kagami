import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type Following = {
  followingId: string;
}[];

type Tags = {
  name: string;
}[];

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, content: string, tags: Tags) {
    return this.prisma.post.create({
      data: {
        userId,
        content,
        tags: {
          connectOrCreate: tags.map((tag) => {
            return {
              where: tag,
              create: tag,
            };
          }),
        },
      },
      include: {
        user: true,
      },
    });
  }

  getMany(userId: string, following: Following, take: number, cursor?: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findMany({
      take,
      skip: cursor === undefined ? 0 : 1,
      cursor,
      where: {
        userId: {
          in: [...following.map((user) => user.followingId), userId],
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  findDetail(id: string, userName: string) {
    return this.prisma.post.findFirst({
      where: {
        id,
        user: {
          userName,
        },
      },
      include: {
        user: true,
      },
    });
  }

  user(userName: string, take: number, cursor?: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findMany({
      take,
      skip: cursor === undefined ? 0 : 1,
      cursor,
      where: {
        user: {
          userName,
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
}
