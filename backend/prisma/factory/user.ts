import faker from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
faker.locale = 'ja';
export const users = async (count: number) => {
  await prisma.user.createMany({
    data: Array(count)
      .fill(0)
      .map((v, i) => ({
        id: faker.datatype.uuid(),
        accountName: faker.name.firstName(),
        userName: `${faker.name.middleName()}${i}`,
        profile: faker.lorem.words(35),
      })),
  });
};
