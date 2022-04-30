import { Scalar, CustomScalar } from '@nestjs/graphql';
import * as dayjs from 'dayjs';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date')
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return new Date(value); // value from the client
  }

  serialize(value: string): string {
    const day = dayjs(value);
    return `${day.year()}-${day.format('MM')}-${day.format('DD')}T${day.format('HH')}:${day.format('mm')}`;
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
