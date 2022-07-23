import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TemplatesService {
  constructor(private prisma: PrismaService) {}

  edit(id: string, userId: string) {
    return this.prisma.template.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        user: true,
      },
    });
  }

  count(userId: string) {
    return this.prisma.template.count({
      where: {
        userId,
      },
    });
  }

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

  async update(userId: string, templateId: string, content: string, detail: string) {
    const template = await this.prisma.template.findFirst({
      select: {
        id: true,
      },
      where: {
        id: templateId,
        userId,
      },
    });
    return this.prisma.template.update({
      select: {
        id: true,
      },
      where: {
        id: template.id,
      },
      data: {
        content,
        detail,
      },
    });
  }
}
