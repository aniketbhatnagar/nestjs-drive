import { Module } from '@nestjs/common';
import { HeroResolver } from './hero.resolver';

@Module({
  providers: [HeroResolver],
})
export class HeroModule {}
