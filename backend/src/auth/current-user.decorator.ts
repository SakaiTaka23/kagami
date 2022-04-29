import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUserID = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const { user } = GqlExecutionContext.create(context).getContext().req;
  return user === false ? undefined : user;
});
