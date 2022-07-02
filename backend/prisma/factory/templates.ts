import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max) + 1;
};

const prisma = new PrismaClient();
faker.locale = 'ja';
const maxNumber = 10;
export const templates = async (count: number) => {
  const users = await prisma.user.findMany();

  users.map(async (user) => {
    await prisma.template.createMany({
      data: Array(count)
        .fill(0)
        .map(() => ({
          userId: user.id,
          content: `${faker.lorem.words(35)} \n #${getRandomInt(maxNumber)} #${getRandomInt(maxNumber)}`,
          detail: faker.lorem.words(15),
        })),
    });
  });
};
