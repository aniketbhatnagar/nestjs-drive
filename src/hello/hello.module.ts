import { Module } from '@nestjs/common';
import { HelloResolver } from './hero.resolver';

@Module({
  providers: [HelloResolver],
})
export class HelloModule {}
