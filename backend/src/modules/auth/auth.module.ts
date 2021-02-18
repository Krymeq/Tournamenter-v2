import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config"
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./auth.service";

@Module({
    imports: [JwtModule.registerAsync({
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          secret: config.get('JWT_HASH'),
          expiresIn: '1d'
        })
      })],
    providers: [AuthGuard, AuthService],
    exports: [AuthService, AuthGuard]
  })
  export class AuthModule {}