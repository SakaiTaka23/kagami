import faker from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const posts = async (count: number) => {
  const users = await prisma.user.findMany();

  users.map(async (user) => {
    await prisma.post.createMany({
      data: Array(count)
        .fill(0)
        .map(() => ({
          userId: user.id,
          content: faker.datatype.string(Math.floor(Math.random() * (140 + 1 - 10) + 10)),
        })),
    });
  });
};
