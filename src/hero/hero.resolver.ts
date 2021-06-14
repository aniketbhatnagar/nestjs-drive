import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Hero, IQuery } from '../generated/graphql';

@Resolver('Hero')
export class HeroResolver {
  // @ResolveField()
  // __resolveType(value: any) {
  //   if (value.name) {
  //     return 'HeroModel';
  //   }
  //   return null;
  // }

  @Query()
  hero(@Args('heroId') heroId: string): Hero {
    return {
      id: heroId,
      name: 'R2-D2',
    };
  }
}
