import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type Following = {
  followingId: string;
}[];

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, content: string) {
    return this.prisma.post.create({
      data: {
        userId,
        content,
      },
    });
  }

  getMany(userId: string, following: Following, take: number, cursor?: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findMany({
      take,
      skip: 1,
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
      skip: 1,
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
