import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HelloModule } from './hello/hello.module';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        outputAs: 'class',
      }
    }),
    HelloModule,
    HeroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
