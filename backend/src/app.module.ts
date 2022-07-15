import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { FollowsModule } from './follows/follows.module';
import { LoggingInterceptor } from './logger/logger.interceptor';
import { CustomLoggerModule } from './logger/logger.module';
import { CustomLoggerService } from './logger/logger.service';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScalarModule } from './scalar/scalar.module';
import { TagsModule } from './tags/tags.module';
import { TempFavoriteModule } from './temp_favorite/temp_favorite.module';
import { TemplatesModule } from './templates/templates.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
    }),
    FollowsModule,
    UsersModule,
    PrismaModule,
    PostsModule,
    ScalarModule,
    TagsModule,
    CustomLoggerModule,
    TemplatesModule,
    TempFavoriteModule,
  ],
  providers: [
    CustomLoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
