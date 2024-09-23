import { IsString, IsNotEmpty, IsEmail, IsOptional, IsIn } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsIn(['user', 'admin'])
    role?: string; // 'user' ou 'admin' - opcional
}
