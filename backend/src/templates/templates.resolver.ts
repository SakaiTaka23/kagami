import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUserID } from 'src/auth/current-user.decorator';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { CreateTemplateInput } from 'src/graphql';

import { TemplatesValidationPipe } from './templates-validation.pipe';
import { TemplatesService } from './templates.service';

@Resolver('Template')
export class TemplatesResolver {
  constructor(private readonly templatesService: TemplatesService) {}

  @UseGuards(FirebaseAuthGuard)
  @Mutation('createTemplate')
  create(@CurrentUserID() id: string, @Args('template', TemplatesValidationPipe) content: CreateTemplateInput) {
    return this.templatesService.create(id, content.content, content.detail);
  }
}
