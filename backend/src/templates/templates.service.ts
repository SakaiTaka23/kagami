import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  create(id: string, content: string, detail: string) {
    return this.prisma.template.create({
      data: {
        content,
        detail,
        userId: id,
      },
      include: {
        user: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.template.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  findMany(take: number, cursor?: Prisma.TemplateWhereUniqueInput) {
    return this.prisma.template.findMany({
      take,
      skip: cursor === undefined ? 0 : 1,
      cursor,
      include: {
        user: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  user(userName: string, take: number, cursor?: Prisma.TemplateWhereUniqueInput) {
    return this.prisma.template.findMany({
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
