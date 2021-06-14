import { Args, Query, Resolver } from '@nestjs/graphql';
import { IQuery } from '../generated/graphql';

@Resolver('Hello')
export class HelloResolver implements Partial<IQuery> {
  @Query()
  hello(@Args('name') name: string): string {
    return name ? name : 'world';
  }
}
