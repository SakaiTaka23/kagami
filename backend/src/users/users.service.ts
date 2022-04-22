import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(id: string, accountName: string, userName: string) {
    return this.prisma.user.create({
      data: {
        id,
        accountName,
        userName,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  follow(userID: string, followingId: string) {
    return this.prisma.follow.create({
      data: {
        followerId: userID,
        followingId,
      },
    });
  }

  fromUserName(userName: string) {
    return this.prisma.user.findUnique({
      where: {
        userName,
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
