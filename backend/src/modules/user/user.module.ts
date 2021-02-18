import { AccountRepository } from './repositories/account.repository';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      AccountRepository
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
