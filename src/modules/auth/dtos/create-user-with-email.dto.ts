import {
    IsAlpha,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    MinLength,
} from 'class-validator';

export class CreateUserWithEmailDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(5)
    password: string;

    @IsOptional()
    name?: string;
}
