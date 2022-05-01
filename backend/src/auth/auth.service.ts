import { Injectable } from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { Auth } from 'firebase-admin/lib/auth/auth';

@Injectable()
export class AuthService {
  private readonly auth: Auth;

  constructor() {
    this.auth = getAuth();
  }

  async createCustomToken(uid: string, accountName: string, userName: string) {
    return this.auth.setCustomUserClaims(uid, {
      accountName,
      userName,
    });
  }
}
