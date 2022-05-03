import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { FirebaseStrategy } from './firebase.strategy';

@Module({
  providers: [FirebaseStrategy, AuthService],
})
export class AuthModule {}
