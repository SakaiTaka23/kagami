import { Module } from '@nestjs/common';

import { CustomLoggerService } from './logger.service';

@Module({
  providers: [CustomLoggerService],
  exports: [CustomLoggerModule],
})
export class CustomLoggerModule {}
