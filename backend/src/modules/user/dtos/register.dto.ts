import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @Length(8, 20)
    password: string;

    @IsEmail()
    email: string;
}