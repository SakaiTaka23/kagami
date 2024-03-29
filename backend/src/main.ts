import { NestFactory } from '@nestjs/core';
import { credential, ServiceAccount } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';

import { AppModule } from './app.module';
import * as serviceAccount from './firebase-adminsdk.json';
import { CustomLoggerService } from './logger/logger.service';

async function bootstrap() {
  initializeApp({
    credential: credential.cert(serviceAccount as ServiceAccount),
  });

  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(CustomLoggerService));
  await app.listen(5000);
}
bootstrap();
