import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { configuration } from './config/configuration';
import { typeorm } from './config/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TasksModule,
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm') as TypeOrmModuleOptions,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
