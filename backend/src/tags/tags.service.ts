import { Injectable } from '@nestjs/common';

type Tags = {
  name: string;
}[];

@Injectable()
export class TagsService {
  private readonly regexp_hash = /#+([a-zA-Z0-9亜-熙ぁ-んァ-ヶー-龥朗-鶴.\-_]+)/g;

  findFromContent(content: string): Tags {
    const tags = content.match(this.regexp_hash);
    return tags.map((t) => {
      return { name: t };
    });
  }
}
