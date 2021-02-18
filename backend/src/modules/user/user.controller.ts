import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post('register')
    @UsePipes(new ValidationPipe())
    async registerUser(@Body() registerData: RegisterDto) {
        return await this.userService.createAccount(registerData);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() user: LoginDto,
                @Res() response: Response) {
        const token = await this.userService.getUserToken(user);
        if (token) {
            response.cookie('token', token);
            response.status(200);
            response.send();
        }
    }
}
