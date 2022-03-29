import { PrismaClient } from '@prisma/client';

import { posts } from './factory/post';
import { users } from './factory/user';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  await users(10);
  await posts(5);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
