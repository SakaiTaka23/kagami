import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { FirebaseStrategy } from 'src/auth/firebase.strategy';
import { PrismaService } from 'src/prisma/prisma.service';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService, AuthService, PrismaService, FirebaseStrategy],
})
export class UsersModule {}
