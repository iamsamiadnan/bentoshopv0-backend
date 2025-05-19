import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserWithEmailDto } from './dtos/create-user-with-email.dto';


@Controller('auth')
export class AuthController {

    
    @Post('/users')
    async createUserWithEmail(@Body() user: CreateUserWithEmailDto) {
        this.
    }
}
