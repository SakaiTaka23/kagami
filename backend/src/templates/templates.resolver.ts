import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
  async create(@CurrentUserID() id: string, @Args('template', TemplatesValidationPipe) content: CreateTemplateInput) {
    const count = await this.templatesService.count(id);
    if (count > 10) {
      throw new HttpException('BadRequest', HttpStatus.BAD_REQUEST);
    }
    return this.templatesService.create(id, content.content, content.detail);
  }

  @Query('templateDetail')
  detail(@Args('id') id: string) {
    return this.templatesService.findOne(id);
  }

  @UseGuards(FirebaseAuthGuard)
  @Query('templateEdit')
  edit(@CurrentUserID() userId: string, @Args('id') templateId: string) {
    return this.templatesService.edit(templateId, userId);
  }

  @Query('templateList')
  list(@Args('take') take: number, @Args('cursor') cursor: string) {
    const cursorObj = cursor === undefined ? undefined : { id: cursor };
    return this.templatesService.findMany(take, cursorObj);
  }

  @Query('templateUser')
  user(@Args('userName') userName: string, @Args('take') take: number, @Args('cursor') cursor?: string) {
    const cursorObj = cursor === undefined ? undefined : { id: cursor };
    return this.templatesService.user(userName, take, cursorObj);
  }

  @UseGuards(FirebaseAuthGuard)
  @Mutation('updateTemplate')
  async update(
    @CurrentUserID() userId: string,
    @Args('id') templateId: string,
    @Args('content') content: string,
    @Args('detail') detail: string
  ) {
    return this.templatesService.update(userId, templateId, content, detail).then((res) => {
      return res.id;
    });
  }
}
