import * as bcrypt from 'bcrypt';
import { ForbiddenException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { AccountRepository } from './repositories/account.repository';
import { LoginDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
    constructor(
        private accountRepository: AccountRepository,
        private authService: AuthService
    ) {}

    async createAccount(registerData: RegisterDto) {
        return await this.accountRepository.insert({
            email: registerData.email,
            username: registerData.username,
            password: await bcrypt.hash(registerData.password, 10),
        });
    }

    async getUserToken(userData: LoginDto): Promise<string> {
        const user = await this.accountRepository.findOne({
            where: {username: userData.username},
            select: ['username', 'password', 'email', 'id']
        });
        if (user) {
            const valid = await bcrypt.compare(userData.password, user.password);
            if (valid) {
                return this.authService.sign({
                    username: user.username,
                    email: user.email,
                    id: user.id
                });
            } else {
                throw new NotFoundException('User not found');
            }
        } else {
            throw new NotFoundException('User not found');
        }
    }
}
