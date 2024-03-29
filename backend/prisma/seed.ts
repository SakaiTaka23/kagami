import { PrismaClient } from '@prisma/client';

import { posts } from './factory/post';
import { postTags } from './factory/post_tags';
import { tags } from './factory/tags';
import { templates } from './factory/templates';
import { users } from './factory/user';

const prisma = new PrismaClient();

async function main() {
  await prisma.follow.deleteMany();
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.template.deleteMany();
  await prisma.user.deleteMany();

  await users(10);
  await posts(20);
  await tags();
  await postTags();
  await templates(5);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
