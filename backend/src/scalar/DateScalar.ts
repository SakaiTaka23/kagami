import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date')
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return new Date(value); // value from the client
  }

  serialize(value: Date): string {
    return `${value.getFullYear()}-${(value.getMonth() + 1).toString().padStart(2, '0')}-${value
      .getDate()
      .toString()
      .padStart(2, '0')}T${value.getHours().toString().padStart(2, '0')}:${value
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
