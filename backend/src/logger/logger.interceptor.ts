import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { catchError, Observable, throwError } from 'rxjs';

import { CustomLoggerService } from './logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: CustomLoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const info = GqlExecutionContext.create(context).getInfo();
    const requestData = {
      type: info.parentType,
      fieldName: info.fieldName,
      variableValues: info.variableValues,
    };

    this.logger.debug(JSON.stringify(requestData));

    return next.handle().pipe(
      catchError((err) => {
        return throwError(() => new Error(err));
      })
    );
  }
}
