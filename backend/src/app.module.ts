import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament/tournament.module';
import { FileModule } from './modules/file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({isGlobal: true}),
    ServeStaticModule.forRoot({
      rootPath: './files'
    }),
    UserModule,
    TournamentModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
