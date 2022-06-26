import { Resolver } from '@nestjs/graphql';

import { TemplatesService } from './templates.service';

@Resolver('Template')
export class TemplatesResolver {
  constructor(private readonly templatesService: TemplatesService) {}
}
