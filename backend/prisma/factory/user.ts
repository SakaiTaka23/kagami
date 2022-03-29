import faker from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const users = async (count: number) => {
  await prisma.user.createMany({
    data: Array(count)
      .fill(0)
      .map(() => ({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
      })),
  });
};
