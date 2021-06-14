import { Args, Query, Resolver } from '@nestjs/graphql';
import { Hero } from '../generated/graphql';

@Resolver('Hero')
export class HeroResolver {
  @Query()
  hero(@Args('heroId') heroId: string): Hero {
    return {
      id: heroId,
      name: 'R2-D2',
    };
  }
}
