import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { UserName } from 'src/graphql';

import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('createUser')
  async create(@CurrentUserID() id: string, @Args('username') username: UserName) {
    await this.authService.createCustomToken(id, username.accountName, username.userName);
    return this.usersService.create(id, username.accountName, username.userName);
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('userFromToken')
  findFromToken(@CurrentUserID() id: string) {
    return this.usersService.findOne(id);
  }

  @Query('userFromUserName')
  findFromUserName(@Args('userName') userName: string) {
    return this.usersService.fromUserName(userName);
  }
}
