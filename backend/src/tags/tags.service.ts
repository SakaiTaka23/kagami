import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

type Tags = {
  name: string;
}[];

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}

  private readonly regexp_hash = /#+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;

  findFromContent(content: string): Tags {
    const tags = content.match(this.regexp_hash);
    return tags.map((t) => {
      return { name: t };
    });
  }

  detail(tag: string, take: number, cursor?: Prisma.TagWhereUniqueInput) {
    return this.prisma.post.findMany({
      take,
      skip: cursor === undefined ? 0 : 1,
      cursor,
      where: {
        tags: {
          some: {
            name: tag,
          },
        },
      },
      include: {
        tags: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
}
