import { Injectable } from '@nestjs/common';
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
}
