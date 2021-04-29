import * as bcrypt from 'bcrypt';
import { BadRequestException, ForbiddenException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
        try {
            return await this.accountRepository.insert({
                email: registerData.email,
                username: registerData.username,
                password: await bcrypt.hash(registerData.password, 10),
            });    
        } catch (error) {
            if (error.errno === 1062) {
                throw new BadRequestException(this.getErrorMessage(error.sqlMessage));
            } else { 
                throw new InternalServerErrorException(`Wystąpił niezidentyfikowany błąd podczas rejestracji.`)
            }
        }
    }

    private getErrorMessage(sqlMessage: string) {
        const match = sqlMessage.match(/'[^ ]+'/g) || [];
        switch (match[1]) {
            case `'user.e-mail'`:
                return `Istnieje już konto użytkownika zarejestrowane na adres e-mail ${match[0]}`;
            case `'user.username'`:
                return `Konto o nazwie użytkownika ${match[0]} już istnieje`
            default:
                return `Wystąpił niezidentyfikowany błąd`
        }
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
