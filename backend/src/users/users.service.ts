import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(id: string, account_name: string, user_name: string) {
    return this.prisma.user.create({
      data: {
        id,
        account_name,
        user_name,
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
}
