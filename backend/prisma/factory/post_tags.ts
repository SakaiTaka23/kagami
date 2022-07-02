import { PrismaClient } from '@prisma/client';

const regexpHash = /#+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;

const findFromContent = (content: string) => {
  return content.match(regexpHash).map((t) => {
    return { name: t.substring(1) };
  });
};

const prisma = new PrismaClient();

export const postTags = async () => {
  const posts = await prisma.post.findMany();

  posts.map(async (post) => {
    const foundTags = findFromContent(post.content);
    return prisma.post
      .update({
        where: {
          id: post.id,
        },
        data: {
          tags: {
            connect: {
              name: foundTags[0].name,
            },
          },
        },
      })
      .catch((e) => {
        console.log(`error: ${e}`);
      });
  });
};
