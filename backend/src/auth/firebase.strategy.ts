import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { auth } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import { ExtractJwt, JwtFromRequestFunction } from 'passport-jwt';
import { Strategy } from 'passport-strategy';
import { ParsedQs } from 'qs';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy, 'firebase') {
  private extractor: JwtFromRequestFunction;

  constructor() {
    super();
    this.extractor = ExtractJwt.fromAuthHeaderAsBearerToken();
  }

  async validate(payload: DecodedIdToken): Promise<string> {
    return payload.uid;
  }

  authenticate(req: Request<ParamsDictionary, unknown, unknown, ParsedQs, Record<string, unknown>>): void {
    const idToken = this.extractor(req);
    if (!idToken) {
      this.fail('Unauthorized', 401);
    }
    auth()
      .verifyIdToken(idToken)
      .then((res) => this.validateDecodedIdToken(res))
      .catch(() => {
        this.fail('Unauthorized', 401);
      });
  }

  private async validateDecodedIdToken(decodedIdToken: DecodedIdToken) {
    const result = await this.validate(decodedIdToken);

    if (result) {
      this.success(result);
    }

    this.fail('Unauthorized', 401);
  }
}
