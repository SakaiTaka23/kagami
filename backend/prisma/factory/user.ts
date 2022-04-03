import faker from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const users = async (count: number) => {
  await prisma.user.createMany({
    data: Array(count)
      .fill(0)
      .map(() => ({
        id: faker.datatype.uuid(),
        account_name: faker.name.firstName(),
        user_name: faker.name.middleName(),
      })),
  });
};
