import { LoggerService } from '@nestjs/common';
import { createLogger, format, Logger, transports } from 'winston';

const setLogLevel = () => {
  const env = process.env.LOG_LEVEL;
  switch (env) {
    case 'dev':
      return 'debug';
    case 'prod':
      return 'warn';
    default:
      return 'warn';
  }
};

export class CustomLoggerService implements LoggerService {
  logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: setLogLevel(),
      format: format.combine(format.colorize(), format.json(), format.simple()),
      transports: [new transports.Console()],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
