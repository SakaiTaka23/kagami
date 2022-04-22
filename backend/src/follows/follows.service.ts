import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FollowsService {
  constructor(private prisma: PrismaService) {}

  follow(userID: string, followingId: string) {
    return this.prisma.follow.create({
      data: {
        followerId: userID,
        followingId,
      },
    });
  }

  async isFollowing(userID: string, userName: string) {
    return this.prisma.follow.count({
      where: {
        followerId: userID,
        following: {
          userName,
        },
      },
    });
  }

  unFollow(userID: string, followingId: string) {
    return this.prisma.follow.delete({
      where: {
        followerId_followingId: {
          followerId: userID,
          followingId,
        },
      },
    });
  }
}
