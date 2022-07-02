import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const tags = async () => {
  await prisma.tag.createMany({
    data: Array(10)
      .fill(0)
      .map((v, i) => ({
        name: `${i + 1}`,
      })),
  });
};
