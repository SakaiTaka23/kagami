import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PostsContentValidationPipe implements PipeTransform {
  private readonly maxLength = 140;

  transform(value: string): string {
    if (value.length > this.maxLength) {
      throw new BadRequestException('content must be less than 140 words long');
    }
    return value;
  }
}
