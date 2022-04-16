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

  fromUserName(userName: string) {
    return this.prisma.user.findUnique({
      where: {
        userName,
      },
    });
  }
}
