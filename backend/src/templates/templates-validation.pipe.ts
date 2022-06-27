import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateTemplateInput } from 'src/graphql';

@Injectable()
export class TemplatesValidationPipe implements PipeTransform {
  private readonly maxLength = 140;

  transform(value: CreateTemplateInput): CreateTemplateInput {
    if (value.content.length > this.maxLength) {
      throw new BadRequestException('content must be less than 140 words long');
    }
    if (value.detail.length > this.maxLength) {
      throw new BadRequestException('detail must be less than 140 words long');
    }
    return value;
  }
}
